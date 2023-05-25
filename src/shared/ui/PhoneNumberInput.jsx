import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import React from "react";

function PhoneNumberInput({ value, onChange }) {
  return (
    <InputGroup>
      <InputGroup.Text id="phoneNumber">+380</InputGroup.Text>
      <Form.Control
        name="phoneNumber"
        placeholder="50 123 45 56"
        aria-label="phoneNumber"
        aria-describedby="phoneNumber"
        type="tel"
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export { PhoneNumberInput };
