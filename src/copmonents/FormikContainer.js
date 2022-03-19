import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControls/FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "", value: "Select an option" },
    { key: 1, value: "green" },
    { key: 2, value: "red" },
    { key: 3, value: "blue" },
  ];

  const radioOptions = [
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];

  const checkboxOptions = [
    { key: "option 1", value: "cOption1" },
    { key: "option 2", value: "cOption2" },
    { key: "option 3", value: "cOption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkboxOption: [],
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOptions: Yup.string().required("Required"),
    checkboxOption: Yup.array()
      .min(1, "Choose at least one checkbox")
      .required("Required"),
  });

  const onSubmit = (value) => console.log("Form data", value);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik.errors);
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl
              control="textarea"
              type="textarea"
              label="Description"
              name="description"
            />

            <FormikControl
              control="select"
              label="Choose a topic"
              name="selectOption"
              options={dropdownOptions}
            />

            <FormikControl
              control="radio"
              label="Radio Topic"
              name="radioOptions"
              options={radioOptions}
            />

            <FormikControl
              control="checkbox"
              label="Checkbox Topic"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
