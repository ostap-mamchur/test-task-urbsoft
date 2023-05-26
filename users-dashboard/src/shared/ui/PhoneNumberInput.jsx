import "react-phone-number-input/style.css";
import PhoneNumber from "react-phone-number-input";
import Form from "react-bootstrap/Form";
import { useMemo } from "react";

function PhoneNumberInput({ onChange, value, error, touched }) {
  const isInvalid = useMemo(() => touched && error, [error, touched]);

  return (
    <Form.Group className="mb-2">
      <Form.Label htmlFor="phoneNumber">Phone number</Form.Label>
      <PhoneNumber
        international
        withCountryCallingCode
        defaultCountry="UA"
        placeholder="Enter phone number"
        value={value}
        onChange={onChange}
        inputComponent={Form.Control}
        isInvalid={isInvalid}
      />
      {isInvalid && (
        <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export { PhoneNumberInput };
