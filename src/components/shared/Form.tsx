import { Field, FieldArray, Form as FormFormik, Formik } from 'formik';
import * as React from 'react';
import {
	PropFormValue,
	StateFormValue,
	TreeComponent
} from '../../@types/interfaces';
import { AddIcon, DeleteIcon } from './Icons';

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
		name: componentToEdit?.name || '',
		parent: componentToEdit?.parent || '',
		props: componentToEdit?.props || [],
		state: componentToEdit?.state || [],
	};

	return (
		<section className="center form">
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
							<label htmlFor="name" className="label__title">
								Name
							</label>
							<Field
								type="text"
								name="name"
								id="name"
								className="input__boxes"
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
												key={`props.${index}`}
												className="fieldset__row"
											>
												<div className="fieldset__row__single">
													<label
														htmlFor={`props.${index}.propName`}
													>
														Prop Name
													</label>
													<Field
														type="text"
														id={`props.${index}.propName`}
														name={`props.${index}.propName`}
														className="input__boxes"
													/>
												</div>
												<div className="fieldset__row__single">
													<label
														htmlFor={`props.${index}.propValue`}
													>
														Prop Value
													</label>
													<Field
														type="text"
														id={`props.${index}.propValue`}
														name={`props.${index}.propValue`}
														className="input__boxes"
													/>
												</div>
												<button
													onClick={() =>
														arrayHelpers.remove(
															index
														)
													}
													type="button"
													className="btn btn__icon"
												>
													<DeleteIcon />
												</button>
											</fieldset>
										))}
										<button
											onClick={() =>
												arrayHelpers.push({
													propName: '',
													propValue: '',
												})
											}
											type="button"
											className="btn btn__form__list btn__icon"
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
												key={`state.${index}`}
												className="fieldset__row"
											>
												<div className="fieldset__row__single">
													<label
														htmlFor={`state.${index}.stateName`}
													>
														State Name
													</label>
													<Field
														type="text"
														id={`state.${index}.stateName`}
														name={`state.${index}.stateName`}
														className="input__boxes"
													/>
												</div>
												<div className="fieldset__row__single">
													<label
														htmlFor={`state.${index}.hookName`}
													>
														Hook
													</label>
													<Field
														type="text"
														id={`state.${index}.hookName`}
														name={`state.${index}.hookName`}
														className="input__boxes"
													/>
												</div>
												<button
													onClick={() =>
														arrayHelpers.remove(
															index
														)
													}
													type="button"
													className="btn btn__icon"
												>
													<DeleteIcon />
												</button>
											</fieldset>
										))}
										<button
											onClick={() =>
												arrayHelpers.push({
													stateName: '',
													hookName: '',
												})
											}
											type="button"
											className="btn btn__form__list btn__icon"
										>
											<AddIcon />
										</button>
									</React.Fragment>
								)}
							</FieldArray>
						</fieldset>
						<fieldset>
							<label htmlFor="parent" className="label__title">
								Parent
							</label>
							<Field
								type="text"
								name="parent"
								id="parent"
								className="input__boxes"
							/>
							{errors.name && <div>{errors.name}</div>}
						</fieldset>
						<button
							className="btn btn__form submit__btn"
							type="submit"
						>
							Submit
						</button>
					</FormFormik>
				)}
			</Formik>
		</section>
	);
}
