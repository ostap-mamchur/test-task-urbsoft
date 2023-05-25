import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { userFormSchema } from "../model/userFormSchema";
import { useUserStore } from "../../../../entities/user/model/store";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
};

function UserForm() {
  const createUser = useUserStore((state) => state.createUser);

  const onSubmit = (values) => {
    createUser(values);
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: userFormSchema,
    onSubmit,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="firstName">First name</Form.Label>
        <Form.Control
          name="firstName"
          id="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
          isInvalid={touched.firstName && errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="lastName">Last name</Form.Label>
        <Form.Control
          name="lastName"
          id="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          isInvalid={touched.lastName && errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          name="email"
          id="email"
          type="email"
          placeholder="example@example.com"
          value={values.email}
          onChange={handleChange}
          isInvalid={touched.email && errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="phoneNumber">Phone number</Form.Label>
        <InputGroup>
          <InputGroup.Text>+380</InputGroup.Text>
          <Form.Control
            name="phoneNumber"
            placeholder="50 123 45 56"
            aria-label="phoneNumber"
            id="phoneNumber"
            type="tel"
            value={values.phoneNumber}
            onChange={handleChange}
            isInvalid={touched.phoneNumber && errors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phoneNumber}
          </Form.Control.Feedback>
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
          isInvalid={touched.dateOfBirth && errors.dateOfBirth}
        />
        <Form.Control.Feedback type="invalid">
          {errors.dateOfBirth}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Create</Button>
    </Form>
  );
}

export { UserForm };
