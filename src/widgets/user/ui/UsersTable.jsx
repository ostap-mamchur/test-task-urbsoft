import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { UserRow } from "../../../entities/user/ui/UserRow";
import { useEffect } from "react";
import { useUserStore } from "../../../entities/user/model/store";
import { statusTypes } from "../../../shared/lib/constants/store";
import { UsersPagination } from "../../../features/user/users-pagination/ui/UsersPagination";
import { FilterUsers } from "../../../features/user/filter-users/ui/FilterUsers";

function UsersTable() {
  const users = useUserStore((state) => state.users);
  const getUsers = useUserStore((state) => state.getUsers);
  const gettingUsersStatus = useUserStore((state) => state.gettingUsersStatus);
  const currentPage = useUserStore((state) => state.currentPage);
  const search = useUserStore((state) => state.search);

  useEffect(() => {
    getUsers();
  }, [currentPage, search]);

  return (
    <>
      <FilterUsers />
      {[statusTypes.IDLE, statusTypes.LOADING].includes(gettingUsersStatus) ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <>
          <Table bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Date of birth</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </tbody>
          </Table>
          <UsersPagination />
        </>
      )}
    </>
  );
}

export { UsersTable };
