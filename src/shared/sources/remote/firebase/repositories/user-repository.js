import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  query,
} from "firebase/firestore";
class UserRepository {
  constructor(db) {
    this.collectionName = "users";
    this.db = db;
  }

  async createUser(userDetails) {
    const doc = await addDoc(
      collection(this.db, this.collectionName),
      userDetails
    );
    const user = { ...userDetails, id: doc.id };
    return user;
  }

  async getUsers() {
    const usersCollectionRef = collection(this.db, this.collectionName);

    const querySnapshot = await getDocs(usersCollectionRef);

    const users = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const lastCursor = querySnapshot.docs[querySnapshot.docs.length - 1];

    const count = await this.getUsersCount();

    return { users, count, lastCursor };
  }

  async getUsersCount() {
    const querySnapshot = await getCountFromServer(
      query(collection(this.db, this.collectionName))
    );

    return querySnapshot.data().count;
  }
}

export { UserRepository };
