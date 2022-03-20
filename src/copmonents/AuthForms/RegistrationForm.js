import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../FormikControls/FormikControl";

const RegistrationForm = () => {
  const options = [
    { key: "Email", value: "email" },
    { key: "Telephone", value: "telephone" },
  ];

  const initialValues = {
    email: "",
    phone: "",
    modeOfContact: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email format").required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephone",
      then: Yup.string().required("Required"),
    }),
    modeOfContact: Yup.string().required("Required"),

    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (value) => {
    console.log("Form data", value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl
              control="input"
              type="tel"
              label="Phone"
              name="phone"
            />

            <FormikControl
              control="radio"
              label="Mode Of Contact"
              name="modeOfContact"
              options={options}
            />

            <FormikControl
              control="input"
              type="password"
              label="password"
              name="password"
            />

            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
