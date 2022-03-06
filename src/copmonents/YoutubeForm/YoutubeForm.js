import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
  useFormik,
} from "formik";
import * as Yup from "yup";
import TextError from "../TextError";
// import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("invalid email format").required("required"),
  channel: Yup.string().required("required"),
});

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="YouTube channel name"
          />
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comment">Comment</label>
          <Field as="textarea" type="text" id="comment" name="comment" />
          <ErrorMessage name="comment" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field type="text" name="address">
            {(props) => {
              const { field, form, meta } = props;
              // console.log("props", props);
              return (
                <>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                  )}
                </>
              );
            }}
          </Field>
          <ErrorMessage name="address" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
