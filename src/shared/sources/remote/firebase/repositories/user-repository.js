import {
  addDoc,
  startAt,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  query,
  startAfter,
  where,
  endAt,
  and,
  or,
} from "firebase/firestore";
import { usersPerPage } from "../../../../lib/constants/users-pagination";
import { orderBy } from "lodash";

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

  async getUsers({ cursor, search } = {}) {
    const constraints = [];

    if (search !== "") {
      constraints.push(
        where("firstName", ">=", search),
        where("firstName", "<=", search + "\uf8ff")
      );
    }

    constraints.push(limit(usersPerPage));

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

    const count = await this.getUsersCount({ search });

    return { users, count, lastCursor };
  }

  async getUsersCount({ search } = {}) {
    const constraints = [];

    if (search !== "") {
      constraints.push(
        where("firstName", ">=", search),
        where("firstName", "<=", search + "\uf8ff")
      );
    }

    const querySnapshot = await getCountFromServer(
      query(collection(this.db, this.collectionName), ...constraints)
    );

    return querySnapshot.data().count;
  }
}

export { UserRepository };
