import * as React from 'react';

import { CrossIcon } from './Icons';

interface FormContainerProps {
	setShow: React.Dispatch<React.SetStateAction<any>>;
}

export default function FormContainer(props: FormContainerProps) {
	const { setShow } = props;

	return (
		<div className="formContainer">
			<div className="formContainer__wrapper">
				<button
					className="btn btn__icon"
					onClick={() => setShow(false)}
					style={{ marginLeft: 'auto' }}
					type="button"
				>
					<CrossIcon />
				</button>
				{/* <Form handleSubmit={handleSubmit} /> */}
			</div>
		</div>
	);
}
