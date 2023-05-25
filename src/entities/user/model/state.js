import { statusTypes } from "../../../shared/lib/constants/store";

const initialUserState = {
  users: [],

  gettingUsersStatus: statusTypes.IDLE,
  creatingUserStatus: statusTypes.IDLE,

  error: "",
};

export { initialUserState };
