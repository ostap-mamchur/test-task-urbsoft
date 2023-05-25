import Container from "react-bootstrap/Container";
import { UserForm } from "../../../features/user/create-user/ui/UserForm";
import { useUserStore } from "../../../entities/user/model/store";

function UserPage() {
  const users = useUserStore((state) => state.users);

  return (
    <Container fluid="sm">
      <UserForm />
      {JSON.stringify(users, null, " ")}
    </Container>
  );
}

export { UserPage };
