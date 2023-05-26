import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { initialUserState } from "./state";
import { userRepository } from "../../../shared/sources/remote/firebase";
import { statusTypes } from "../../../shared/lib/constants/store";

const useUserStore = create(
  immer((set, get) => ({
    ...initialUserState,
    createUser: async (userDetails) => {
      try {
        set((state) => {
          state.creatingUserStatus = statusTypes.LOADING;
        });

        await userRepository.createUser(userDetails);

        set((state) => {
          state.creatingUserStatus = statusTypes.SUCCEEDED;
          state.currentPage = 1;
          state.cursors = {};
        });

        get().getUsers();
      } catch (err) {
        set((state) => {
          state.error = err.message;
          state.creatingUserStatus = statusTypes.FAILED;
        });
      }
    },
    getUsers: async () => {
      try {
        set((state) => {
          state.gettingUsersStatus = statusTypes.LOADING;
        });

        const users = await userRepository.getUsers();

        set((state) => {
          state.users = users;
          state.gettingUsersStatus = statusTypes.SUCCEEDED;
        });
      } catch (err) {
        set((state) => {
          state.error = err.message;
          state.gettingUsersStatus = statusTypes.FAILED;
        });
      }
    },
    nextPage: () => {
      set((state) => {
        state.currentPage += 1;
      });
    },
    prevPage: () => {
      set((state) => {
        state.currentPage -= 1;
      });
    },
    setSearch: (search) => {
      set((state) => {
        state.search = search;
        state.currentPage = 1;
        state.cursors = {};
      });
    },
  }))
);

export { useUserStore };
