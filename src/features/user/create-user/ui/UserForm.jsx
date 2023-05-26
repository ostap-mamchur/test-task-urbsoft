import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { userFormSchema } from "../model/userFormSchema";
import { useUserStore } from "../../../../entities/user/model/store";
import { statusTypes } from "../../../../shared/lib/constants/store";
import { PhoneNumberInput } from "../../../../shared/ui/PhoneNumberInput";
import { useUpdate } from "../../../../shared/lib/hooks/useUpdate";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
};

function UserForm() {
  const createUser = useUserStore((state) => state.createUser);
  const creatingUserStatus = useUserStore((state) => state.creatingUserStatus);

  const onSubmit = (values) => {
    createUser(values);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: userFormSchema,
    onSubmit,
  });

  const afterCreatingUserSucceeded = ([prevCreatingUserStatus]) => {
    if (
      creatingUserStatus === statusTypes.SUCCEEDED &&
      prevCreatingUserStatus !== statusTypes.SUCCEEDED
    ) {
      resetForm();
    }
  };

  useUpdate(
    (prevDeps) => {
      afterCreatingUserSucceeded(prevDeps);
    },
    [creatingUserStatus]
  );

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
      <PhoneNumberInput
        value={values.phoneNumber}
        onChange={(phoneNumber) => setFieldValue("phoneNumber", phoneNumber)}
        error={errors.phoneNumber}
        touched={touched.phoneNumber}
      />
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
      <Button
        disabled={creatingUserStatus === statusTypes.LOADING}
        type="submit"
      >
        {creatingUserStatus === statusTypes.LOADING ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "Create"
        )}
      </Button>
    </Form>
  );
}

export { UserForm };
