import { useEffect } from "react";
import { UserPage } from "../pages/user/ui/UserPage";
import { userRepository } from "../shared/sources/remote/firebase";

function App() {
  useEffect(() => {
    userRepository.getUsers().then(console.log);
  });

  return (
    <div>
      <UserPage />
    </div>
  );
}

export default App;
