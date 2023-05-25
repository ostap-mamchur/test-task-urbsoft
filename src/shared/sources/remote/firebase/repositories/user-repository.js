import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  query,
  startAfter,
} from "firebase/firestore";
import { usersPerPage } from "../../../../lib/constants/users-pagination";

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

  async getUsers({ cursor } = {}) {
    const constraints = [limit(usersPerPage)];

    if (cursor) {
      constraints.push(startAfter(cursor));
    }

    const usersCollectionRef = collection(this.db, this.collectionName);

    const querySnapshot = await getDocs(
      query(usersCollectionRef, ...constraints)
    );

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
      collection(this.db, this.collectionName)
    );

    return querySnapshot.data().count;
  }
}

export { UserRepository };
