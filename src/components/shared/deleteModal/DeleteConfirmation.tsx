import * as React from 'react';

import { useTreeContext } from 'context/TreeContext';
import { useSelectedNodeContext } from 'context/SelectedNodeContext';

interface DeleteConfirmationProps {
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DeleteConfirmation(
  props: DeleteConfirmationProps
): React.ReactElement {
  const { setShowDelete } = props;
  const { selectedNode, setSelectedNode } = useSelectedNodeContext();
  const { removeNode } = useTreeContext();

  function deletionIsConfirmed() {
    setShowDelete(false);
    removeNode(selectedNode);
    setSelectedNode('');
  }

  return (
    <div className="confirmation__wrapper">
      <section className="confirmation__modal">
        <h2>Delete Node</h2>
        <p>
          Are you sure you want to delete this node? Any children will be
          deleted as well.
        </p>
        <div className="confirmation__buttons__container">
          <button
            className="btn confirmation__button-cancel"
            onClick={() => setShowDelete(false)}
          >
            Cancel
          </button>
          <button
            className="btn confirmation__button-confirm"
            onClick={deletionIsConfirmed}
          >
            Confirm
          </button>
        </div>
      </section>
    </div>
  );
}
