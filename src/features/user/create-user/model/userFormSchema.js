import * as yup from "yup";

const userFormSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),
  phoneNumber: yup.string().required(),
  dateOfBirth: yup
    .date()
    .min(new Date('1900-01-01'))
    .max(new Date())
    .required()
});
export { userFormSchema }