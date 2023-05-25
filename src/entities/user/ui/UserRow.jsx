function UserRow({ user }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.dateOfBirth}</td>
    </tr>
  );
}

export { UserRow };
