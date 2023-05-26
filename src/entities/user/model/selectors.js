import { usersPerPage } from "../../../shared/lib/constants/users-pagination";

const selectUsers = (state) => {
  const { users, currentPage, search } = state;

  let filteredUsers = users;

  if (search !== "") {
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search)
    );
  }

  const offset = currentPage * usersPerPage;

  return filteredUsers.slice(offset, offset + usersPerPage);
};

export { selectUsers };
