import { useSelectedNodeContext } from 'context/SelectedNodeContext';
import * as React from 'react';

import Form from './Form';
import { CrossIcon } from './Icons';

interface FormContainerProps {
  type: string;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormContainer(
  props: FormContainerProps
): React.ReactElement {
  const { type, setShowForm } = props;
  const { setSelectedNode } = useSelectedNodeContext();

  function closeFormModal() {
    if (type === 'edit') {
      setSelectedNode('');
    }
    setShowForm(false);
  }

  return (
    <div className="formContainer">
      <div className="formContainer__wrapper">
        <button
          className="btn btn__icon"
          onClick={closeFormModal}
          style={{ marginLeft: 'auto' }}
          type="button"
        >
          <CrossIcon />
        </button>
        <Form type={type} setShowForm={setShowForm} />
      </div>
    </div>
  );
}
