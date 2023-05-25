import Form from "react-bootstrap/Form";
import _ from "lodash";
import { useUserStore } from "../../../../entities/user/model/store";
import { useMemo } from "react";

function FilterUsers() {
  const setSearch = useUserStore((state) => state.setSearch);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const debouncedSearchChange = useMemo(() => {
    return _.debounce(handleSearchChange, 300);
  }, []);

  return (
    <Form.Group className="mb-3">
      <Form.Label>Search by first name or last name</Form.Label>
      <Form.Control
        onChange={debouncedSearchChange}
        type="text"
        placeholder="John"
      />
    </Form.Group>
  );
}

export { FilterUsers };
