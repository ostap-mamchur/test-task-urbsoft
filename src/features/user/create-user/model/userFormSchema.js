import * as yup from "yup";

const userFormSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  phoneNumber: yup.string().required("Phone number is required"),
  dateOfBirth: yup
    .date()
    .min(new Date("1900-01-01"), "Date of birth is invalid")
    .max(new Date(), "Date of birth is invalid")
    .required("Date of birth is required"),
});
export { userFormSchema };
