import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../../../config/firebase";
import { UserRepository } from "./repositories/user-repository";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userRepository = new UserRepository(db);

export { userRepository, db };
