import { statusTypes } from "../../../shared/lib/constants/store";

const initialUserState = {
  users: [],
  count: 0,

  currentPage: 1,
  cursors: {},

  gettingUsersStatus: statusTypes.IDLE,
  creatingUserStatus: statusTypes.IDLE,

  error: "",
};

export { initialUserState };
