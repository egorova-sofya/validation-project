import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../FormikControls/FormikControl";

const EnrollmentForm = () => {
  const dropdownOptions = [
    { key: "", value: "Select your course" },
    { key: "React", value: "React" },
    { key: "Angular", value: "Angular" },
    { key: "Vue", value: "Vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "HTML" },
    { key: "CSS", value: "CSS" },
    { key: "JS", value: "JS" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
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

            <FormikControl control="textarea" label="bio" name="bio" />

            <FormikControl
              control="select"
              label="course"
              name="course"
              options={dropdownOptions}
            />

            <FormikControl
              control="checkbox"
              label="your skills"
              name="skills"
              options={checkboxOptions}
            />

            <FormikControl
              control="date"
              label="Course date"
              name="courseDate"
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

export default EnrollmentForm;
