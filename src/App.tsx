import * as React from 'react';

import Body from 'components/body/Body';
import Navbar from 'components/navbar/Navbar';
import FormContainer from 'components/shared/FormContainer';
import DeleteConfirmation from 'components/shared/deleteModal/DeleteConfirmation';
import { useSelectedNodeContext } from 'context/SelectedNodeContext';

function App(): React.ReactElement {
  const { selectedNode } = useSelectedNodeContext();
  const [showForm, setShowForm] = React.useState(false);
  const [showDelete, setShowDelete] = React.useState(false);

  return (
    <div id="container">
      {showForm && (
        <FormContainer
          type={selectedNode.length ? 'edit' : 'insert'}
          setShowForm={setShowForm}
        />
      )}
      {showDelete && <DeleteConfirmation setShowDelete={setShowDelete} />}
      <Navbar setShowForm={setShowForm} />
      <Body setShowDelete={setShowDelete} setShowForm={setShowForm} />
    </div>
  );
}

export default App;
