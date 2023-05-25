import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { initialUserState } from "./state";

const useUserStore = create(
  immer((set) => ({
    ...initialUserState,
    createUser: (user) => {
      set((state) => {
        state.users.push(user);
      });
    },
  }))
);

export { useUserStore };
