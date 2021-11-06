import * as React from "react";
import { Formik, Form as FormFormik, Field, FieldArray } from "formik";
import {
  TreeComponent,
  PropFormValue,
  StateFormValue,
} from "../../@types/interfaces";

interface FormProps {
  handleSubmit: (newComponent: TreeComponent) => void;
  componentToEdit?: TreeComponent;
}

interface FormInitialValues {
  name: string;
  parent: string;
  props: Array<PropFormValue>;
  state: Array<StateFormValue>;
}

export default function Form(props: FormProps) {
  const { handleSubmit, componentToEdit } = props;
  const initialValues: FormInitialValues = {
    name: componentToEdit?.name || "",
    parent: componentToEdit?.parent || "",
    props: componentToEdit?.props || [],
    state: componentToEdit?.state || [],
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
              <h3>Props</h3>
              <FieldArray name="props">
                {(arrayHelpers) => (
                  <React.Fragment>
                    {values.props.map((prop, index) => (
                      <fieldset key={`props.${index}`}>
                        <div>
                          <label htmlFor={`props.${index}.propName`}>
                            Prop Name
                          </label>
                          <Field
                            type="text"
                            id={`props.${index}.propName`}
                            name={`props.${index}.propName`}
                          />
                        </div>
                        <div>
                          <label htmlFor={`props.${index}.propValue`}>
                            Prop Value
                          </label>
                          <Field
                            type="text"
                            id={`props.${index}.propValue`}
                            name={`props.${index}.propValue`}
                          />
                        </div>
                        <button
                          onClick={() => arrayHelpers.remove(index)}
                          type="button"
                        >
                          Delete
                        </button>
                      </fieldset>
                    ))}
                    <button
                      onClick={() =>
                        arrayHelpers.push({ propName: "", propValue: "" })
                      }
                      type="button"
                    >
                      Add prop
                    </button>
                  </React.Fragment>
                )}
              </FieldArray>
            </fieldset>
            <fieldset>
              <h3>State</h3>
              <FieldArray name="state">
                {(arrayHelpers) => (
                  <React.Fragment>
                    {values.state.map((entry, index) => (
                      <fieldset key={`state.${index}`}>
                        <div>
                          <label htmlFor={`state.${index}.stateName`}>
                            State Name
                          </label>
                          <Field
                            type="text"
                            id={`state.${index}.stateName`}
                            name={`state.${index}.stateName`}
                          />
                        </div>
                        <div>
                          <label htmlFor={`state.${index}.hookName`}>
                            Hook
                          </label>
                          <Field
                            type="text"
                            id={`state.${index}.hookName`}
                            name={`state.${index}.hookName`}
                          />
                        </div>
                        <button
                          onClick={() => arrayHelpers.remove(index)}
                          type="button"
                        >
                          Delete
                        </button>
                      </fieldset>
                    ))}
                    <button
                      onClick={() =>
                        arrayHelpers.push({ stateName: "", hookName: "" })
                      }
                      type="button"
                    >
                      Add state
                    </button>
                  </React.Fragment>
                )}
              </FieldArray>
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
