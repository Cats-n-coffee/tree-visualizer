import * as React from 'react';

import Form from './Form';
import { CrossIcon } from './Icons';

interface FormContainerProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormContainer(
  props: FormContainerProps
): React.ReactElement {
  const { setShowForm } = props;

  return (
    <div className="formContainer">
      <div className="formContainer__wrapper">
        <button
          className="btn btn__icon"
          onClick={() => setShowForm(false)}
          style={{ marginLeft: 'auto' }}
          type="button"
        >
          <CrossIcon />
        </button>
        <Form setShowForm={setShowForm} />
      </div>
    </div>
  );
}
