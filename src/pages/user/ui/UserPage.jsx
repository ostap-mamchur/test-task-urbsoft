import Container from "react-bootstrap/Container";
import { UserForm } from "../../../features/user/create-user/ui/UserForm";

function UserPage() {
  return (
    <Container fluid="sm">
      <UserForm />
    </Container>
  );
}

export { UserPage };
