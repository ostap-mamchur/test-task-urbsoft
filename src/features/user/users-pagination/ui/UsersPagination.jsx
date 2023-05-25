import Pagination from "react-bootstrap/Pagination";

function UsersPagination() {
  return (
    <Pagination>
      <Pagination.Item active={true}>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item>
      <Pagination.Item>4</Pagination.Item>
    </Pagination>
  );
}

export { UsersPagination };
