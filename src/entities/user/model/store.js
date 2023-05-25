import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { initialUserState } from "./state";
import { userRepository } from "../../../shared/sources/remote/firebase";

const useUserStore = create(
  immer((set, get) => ({
    ...initialUserState,
    createUser: async (userDetails) => {
      try {
        set((state) => {
          state.creatingUserStatus = "loading";
        });

        await userRepository.createUser(userDetails);

        set((state) => {
          state.creatingUserStatus = "success";
        });

        get().getUsers();
      } catch (err) {
        set((state) => {
          state.error = err.message;
          state.creatingUserStatus = "failed";
        });
      }
    },
    getUsers: async () => {
      try {
        set((state) => {
          state.gettingUsersStatus = "loading";
        });

        const users = await userRepository.getUsers();

        set((state) => {
          state.users = users;
          state.gettingUsersStatus = "success";
        });
      } catch (err) {
        set((state) => {
          state.error = err.message;
          state.gettingUsersStatus = "failed";
        });
      }
    },
  }))
);

export { useUserStore };
