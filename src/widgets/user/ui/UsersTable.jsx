import Table from "react-bootstrap/Table";
import { UserRow } from "../../../entities/user/ui/UserRow";

function UsersTable() {

  

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Date of birth</th>
        </tr>
      </thead>
      <tbody>
        <UserRow
          user={{
            id: 1,
            firstName: "ostap",
            lastName: "Mamchur",
            email: "mamchurostap26@gmail.com",
            phoneNumber: "0730396895",
            dateOfBirth: "2020-01-02",
          }}
        />
      </tbody>
    </Table>
  );
}

export { UsersTable };
