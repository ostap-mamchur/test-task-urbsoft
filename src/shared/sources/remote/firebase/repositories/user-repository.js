import { addDoc, collection, getDocs } from "firebase/firestore";

class UserRepository {
  constructor(db) {
    this.collectionName = "users";
    this.db = db;
  }

  async createUser(userDetails) {
    const doc = await addDoc(collection(this.db, this.collectionName), {
      user: userDetails,
    });
    const user = { user: userDetails, id: doc.id };
    return user;
  }

  async getUsers() {
    const querySnapshot = await getDocs(
      collection(this.db, this.collectionName)
    );

    const users = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return users;
  }
}

export { UserRepository };
