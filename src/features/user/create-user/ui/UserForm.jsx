import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { userFormSchema } from "../model/userFormSchema";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
};

function UserForm() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: userFormSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="firstName">First name</Form.Label>
        <Form.Control
          name="firstName"
          id="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="lastName">Last name</Form.Label>
        <Form.Control
          name="lastName"
          id="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          name="email"
          id="email"
          type="email"
          placeholder="example@example.com"
          value={values.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="phoneNumber">Phone number</Form.Label>
        <InputGroup>
          <InputGroup.Text id="phoneNumber">+380</InputGroup.Text>
          <Form.Control
            name="phoneNumber"
            placeholder="50 123 45 56"
            aria-label="phoneNumber"
            aria-describedby="phoneNumber"
            type="tel"
            value={values.phoneNumber}
            onChange={handleChange}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="dateOfBirth">Date of birth</Form.Label>
        <Form.Control
          name="dateOfBirth"
          id="dateOfBirth"
          type="date"
          value={values.dateOfBirth}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit">Create</Button>
    </Form>
  );
}

export { UserForm };
