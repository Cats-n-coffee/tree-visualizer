import * as React from 'react';

import Body from 'components/body/Body';
import Navbar from 'components/navbar/Navbar';
import FormContainer from 'components/shared/FormContainer';
import DeleteConfirmation from 'components/shared/deleteModal/DeleteConfirmation';

function App(): React.ReactElement {
  const [showForm, setShowForm] = React.useState(false);
  const [showDelete, setShowDelete] = React.useState(false);

  return (
    <div id="container">
      {showForm && <FormContainer setShowForm={setShowForm} />}
      {showDelete && <DeleteConfirmation setShowDelete={setShowDelete} />}
      <Navbar setShowForm={setShowForm} />
      <Body setShowDelete={setShowDelete} />
    </div>
  );
}

export default App;
