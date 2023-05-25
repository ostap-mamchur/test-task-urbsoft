import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { initialUserState } from "./state";
import { userRepository } from "../../../shared/sources/remote/firebase";

const useUserStore = create(
  immer((set) => ({
    ...initialUserState,
    createUser: async (userDetails) => {
      await userRepository.createUser(userDetails);
    },
  }))
);

export { useUserStore };
