import * as React from 'react';

import Body from 'components/body/Body';
import Navbar from 'components/navbar/Navbar';
import FormContainer from 'components/shared/FormContainer';


function App() {
	const [show, setShow] = React.useState(false);

	return (
		<div id="container">
			{show && <FormContainer setShow={setShow} />}
			<Navbar setShow={setShow} />
			<Body />
		</div>
	);
}

export default App;
