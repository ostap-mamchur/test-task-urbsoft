import Container from "react-bootstrap/Container";
import { UserForm } from "../../../features/user/create-user/ui/UserForm";
import { UsersTable } from "../../../widgets/user/ui/UsersTable";

function UserPage() {
  return (
    <Container>
      <Container fluid="sm" style={{ maxWidth: "560px" }}>
        <UserForm />
      </Container>
      <UsersTable />
    </Container>
  );
}

export { UserPage };
