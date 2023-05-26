import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
class UserRepository {
  constructor(db) {
    this.collectionName = "users";
    this.db = db;
    this.usersCollectionRef = collection(this.db, this.collectionName);
  }

  async createUser(userDetails) {
    const doc = await addDoc(this.usersCollectionRef, userDetails);
    const user = { ...userDetails, id: doc.id };
    return user;
  }

  async getUsers() {
    const querySnapshot = await getDocs(this.usersCollectionRef);

    const users = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return users;
  }
}

export { UserRepository };
