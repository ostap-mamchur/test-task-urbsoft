import { usersPerPage } from "../../../shared/lib/constants/users-pagination";

const selectUsers = (state) => {
  const { users, currentPage, search } = state;

  let filteredUsers = users;

  if (search !== "") {
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase())
    );
  }
  const count = filteredUsers.length;

  const offset = (currentPage - 1) * usersPerPage;

  return { users: filteredUsers.slice(offset, offset + usersPerPage), count };
};

export { selectUsers };
