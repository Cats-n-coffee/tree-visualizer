import { useSelectedNodeContext } from 'context/SelectedNodeContext';
import { useTreeContext } from 'context/TreeContext';
import { Field, FieldArray, Form as FormFormik, Formik } from 'formik';
import * as React from 'react';

import { AddIcon, DeleteIcon } from './Icons';

interface FormProps {
  type: string;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormInitialValues {
  name: string;
  parent: string | null;
  props: Array<PropFormValue>;
  state: Array<StateFormValue>;
  allChildren: [];
}

export default function Form(props: FormProps): React.ReactElement {
  const { type, setShowForm } = props;
  const { readNode, insertNode, editNode, readNodeList } = useTreeContext();
  const { selectedNode, setSelectedNode } = useSelectedNodeContext();
  const [nodeToEdit, setNodeToEdit] = React.useState<TreeNode | null>(null);
  const nodeList = readNodeList();

  const initialValues: FormInitialValues = {
    name: nodeToEdit?.name || '',
    parent: nodeToEdit?.parent || '',
    props: nodeToEdit?.props || [],
    state: nodeToEdit?.state || [],
    allChildren: [],
  };

  const handleSubmitInsert = (node: TreeNode) => {
    if (node.parent === '') {
      insertNode({ ...node, parent: null });
    } else {
      insertNode(node);
    }
    setShowForm(false);
  };

  const handleSubmitEdit = (node: TreeNode) => {
    editNode(selectedNode, node);
    setSelectedNode('');
    setShowForm(false);
  };

  const validateName = (nodeName: string) => {
    if (type === 'edit' && nodeName === initialValues.name) return;
    const checkName = readNode(nodeName);
    if (checkName === 'No match' || checkName === 'No component yet') {
      return null;
    } else {
      return 'Component name already used';
    }
  };

  React.useEffect(() => {
    if (type === 'edit' && selectedNode) {
      const currentNode = readNode(selectedNode);
      console.log('currentNode is', currentNode);
      if (typeof currentNode !== 'string') {
        setNodeToEdit(currentNode);
      }
    }
  }, [selectedNode, type]);

  return (
    <section className="center form">
      <h2>{type} Form</h2>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={(values) => {
          if (type === 'insert') {
            handleSubmitInsert(values);
          } else {
            handleSubmitEdit(values);
          }
        }}
        validateOnBlur={true}
        validateOnChange={false}
      >
        {({ errors, values }) => (
          <FormFormik>
            <fieldset>
              <label className="label__title" htmlFor="name">
                Name
              </label>
              <Field
                className="input__boxes"
                id="name"
                name="name"
                type="text"
                validate={validateName}
              />
              {errors.name && <div>{errors.name}</div>}
            </fieldset>
            <fieldset className="fieldset__list">
              <h3 className="label__title">Props</h3>
              <FieldArray name="props">
                {(arrayHelpers) => (
                  <React.Fragment>
                    {values.props.map((prop, index) => (
                      <fieldset
                        className="fieldset__row"
                        key={`props.${index}`}
                      >
                        <div className="fieldset__row__single">
                          <label htmlFor={`props.${index}.propName`}>
                            Prop Name
                          </label>
                          <Field
                            className="input__boxes"
                            id={`props.${index}.propName`}
                            name={`props.${index}.propName`}
                            type="text"
                          />
                        </div>
                        <div className="fieldset__row__single">
                          <label htmlFor={`props.${index}.propValue`}>
                            Prop Value
                          </label>
                          <Field
                            className="input__boxes"
                            id={`props.${index}.propValue`}
                            name={`props.${index}.propValue`}
                            type="text"
                          />
                        </div>
                        <button
                          className="btn btn__icon"
                          onClick={() => arrayHelpers.remove(index)}
                          type="button"
                        >
                          <DeleteIcon />
                        </button>
                      </fieldset>
                    ))}
                    <button
                      className="btn btn__form__list btn__icon"
                      onClick={() =>
                        arrayHelpers.push({
                          propName: '',
                          propValue: '',
                        })
                      }
                      type="button"
                    >
                      <AddIcon />
                    </button>
                  </React.Fragment>
                )}
              </FieldArray>
            </fieldset>
            <fieldset className="fieldset__list">
              <h3 className="label__title">State</h3>
              <FieldArray name="state">
                {(arrayHelpers) => (
                  <React.Fragment>
                    {values.state.map((entry, index) => (
                      <fieldset
                        className="fieldset__row"
                        key={`state.${index}`}
                      >
                        <div className="fieldset__row__single">
                          <label htmlFor={`state.${index}.stateName`}>
                            State Name
                          </label>
                          <Field
                            className="input__boxes"
                            id={`state.${index}.stateName`}
                            name={`state.${index}.stateName`}
                            type="text"
                          />
                        </div>
                        <div className="fieldset__row__single">
                          <label htmlFor={`state.${index}.hookName`}>
                            Hook
                          </label>
                          <Field
                            className="input__boxes"
                            id={`state.${index}.hookName`}
                            name={`state.${index}.hookName`}
                            type="text"
                          />
                        </div>
                        <button
                          className="btn btn__icon"
                          onClick={() => arrayHelpers.remove(index)}
                          type="button"
                        >
                          <DeleteIcon />
                        </button>
                      </fieldset>
                    ))}
                    <button
                      className="btn btn__form__list btn__icon"
                      onClick={() =>
                        arrayHelpers.push({
                          hookName: '',
                          stateName: '',
                        })
                      }
                      type="button"
                    >
                      <AddIcon />
                    </button>
                  </React.Fragment>
                )}
              </FieldArray>
            </fieldset>
            <fieldset>
              <label className="label__title" htmlFor="parent">
                Parent
              </label>
              {type === 'insert' ? (
                <Field
                  as="select"
                  id="component-parent"
                  name="parent"
                  className="input__boxes"
                >
                  <option>Select a Parent</option>
                  {nodeList && nodeList.length
                    ? nodeList.map((node, index) => (
                        <option value={node} key={`${node}-index${index}`}>
                          {node}
                        </option>
                      ))
                    : null}
                </Field>
              ) : (
                <Field
                  as="select"
                  id="component-parent"
                  name="parent"
                  className="input__boxes"
                  disabled
                />
              )}
            </fieldset>
            <button className="btn btn__form submit__btn" type="submit">
              Submit
            </button>
          </FormFormik>
        )}
      </Formik>
    </section>
  );
}
