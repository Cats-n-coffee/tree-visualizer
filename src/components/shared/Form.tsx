import * as React from "react";
import { Formik, Form as FormFormik, Field, FieldArray } from "formik";
import { NewComponent } from "../../@types/interfaces";

interface FormProps {
  handleSubmit: (newComponent: NewComponent) => void;
}

interface FormInitialValues {
  name: string;
  parent: string;
}

export default function Form(props: FormProps) {
  const { handleSubmit } = props;
  const initialValues: FormInitialValues = {
    name: "",
    parent: "",
  };

  return (
    <section>
      <h2>Form</h2>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={false}
        enableReinitialize={true}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, errors }) => (
          <FormFormik>
            <fieldset>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              {errors.name && <div>{errors.name}</div>}
            </fieldset>
            <fieldset>
              <label htmlFor="parent">Parent</label>
              <Field type="text" name="parent" id="parent" />
              {errors.name && <div>{errors.name}</div>}
            </fieldset>
            <button type="submit">Submit</button>
          </FormFormik>
        )}
      </Formik>
    </section>
  );
}
