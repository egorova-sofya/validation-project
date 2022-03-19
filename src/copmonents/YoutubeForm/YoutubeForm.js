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
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "sonya",
  email: "kazantseva.sofya@yandex.ru",
  channel: "rgge",
  comment: "rgerg",
  address: "221b",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values, onSubmitProps) => {
  // console.log("form data", values);
  console.log("onSubmitProps", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("invalid email format").required("required"),
  channel: Yup.string().required("required"),
});

/* specified validation rules at the field level */
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

function YoutubeForm() {
  const [formValues, setFormValues] = useState(null);

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // enableReinitialize
      // validateOnMount
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        // console.log("formik props", formik);
        return (
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

            {/* specified validation rules at the field level */}
            <div className="form-control">
              <label htmlFor="comment">Comment</label>
              <Field
                as="textarea"
                type="text"
                id="comment"
                name="comment"
                validate={validateComments}
              />
              <ErrorMessage name="comment" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>

              {/* perfomance savior */}
              <FastField type="text" name="address">
                {({ field, form, meta }) => {
                  // console.log("props", props);
                  // console.log("Field redner");
                  return (
                    <>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </>
                  );
                }}
              </FastField>
              <ErrorMessage name="address" />
            </div>

            <div className="form-control">
              <label htmlFor="facebook">facebook</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">twitter</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primatyPhone">primatyPhone</label>
              <Field type="text" id="primatyPhone" name="phoneNumbers[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPhone">secondaryPhone</label>
              <Field type="text" id="secondaryPhone" name="phoneNumbers[1]" />
            </div>

            {/* dynamic field */}
            <div className="form-control">
              <label>list of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  // console.log("fieldArrayProps", fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  // console.log("form errors", form.errors);
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            {/* <button
              type="button"
              onClick={() => {
                formik.validateField("comment");
              }}
            >
              Validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all
            </button>

            <button
              type="button"
              onClick={() => {
                formik.setFieldTouched("comment");
              }}
            >
              Touched comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comment: true,
                })
              }
            >
              Touched all
            </button> */}

            {/* loadin new data from server */}
            <button type="button" onClick={() => setFormValues(savedValues)}>
              load saved data
            </button>

            <button
              type="submit"
              //  disabled={!(formik.isValid && formik.dirty)}
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeForm;
