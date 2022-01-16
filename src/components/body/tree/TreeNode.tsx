import * as React from 'react';
import { useSelectedNodeContext } from 'context/SelectedNodeContext';
import { DeleteIcon, EditIcon, InfoIcon } from '../../shared/Icons';

interface TreeNodeProps {
  node: TreeNode;
  level: number;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TreeNode(props: TreeNodeProps): React.ReactElement {
  const { node, level, setShowDelete, setShowForm } = props;
  const { setSelectedNode } = useSelectedNodeContext();
  const [showActions, setShowActions] = React.useState<boolean>(false);
  const [showInfo, setShowInfo] = React.useState<boolean>(false);

  function handleConfirmation() {
    setSelectedNode(node.name);
    setShowDelete(true);
  }

  function handleEdit() {
    setSelectedNode(node.name);
    setShowForm(true);
  }

  return (
    <article
      className="node"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <h3>{node.name}</h3>
      {showActions && (
        <div className="node__details">
          <button className="btn node__btn" onClick={handleEdit}>
            <EditIcon />
          </button>
          <button className="btn node__btn" onClick={handleConfirmation}>
            <DeleteIcon />
          </button>
          <button
            className="btn node__btn"
            onMouseOver={() => setShowInfo(true)}
            onMouseOut={() => setShowInfo(false)}
          >
            <InfoIcon />
          </button>
        </div>
      )}
      {showInfo && <div className="node__info">info for node {node.name}</div>}
    </article>
  );
}
