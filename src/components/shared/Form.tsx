import { Field, FieldArray, Form as FormFormik, Formik } from 'formik';
import * as React from 'react';

import {
	PropFormValue,
	StateFormValue,
	TreeComponent,
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
	const { componentToEdit, handleSubmit } = props;
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
				enableReinitialize={true}
				initialValues={initialValues}
				onSubmit={(values) => {
					handleSubmit(values);
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
													<label
														htmlFor={`props.${index}.propName`}
													>
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
													<label
														htmlFor={`props.${index}.propValue`}
													>
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
													onClick={() =>
														arrayHelpers.remove(
															index
														)}
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
												})}
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
													<label
														htmlFor={`state.${index}.stateName`}
													>
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
													<label
														htmlFor={`state.${index}.hookName`}
													>
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
													onClick={() =>
														arrayHelpers.remove(
															index
														)}
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
												})}
											type="button"
										>
											<AddIcon />
										</button>
									</React.Fragment>
								)}
							</FieldArray>
						</fieldset>
						<fieldset>
							<label
								className="label__title"
								htmlFor="parent"
							>
								Parent
							</label>
							<Field
								className="input__boxes"
								id="parent"
								name="parent"
								type="text"
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
