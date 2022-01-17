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
  console.log(node.props, node.state);
  return (
    <article
      className="node"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      id={node.id}
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
      {showInfo && (
        <div className="node__info">
          <h4>Props</h4>
          {node.props.length
            ? node.props.map((prop) => (
                <div key={prop.propName} className="node__info__details">
                  <span>{prop.propName} </span> -<span> {prop.propValue}</span>
                </div>
              ))
            : 'No props'}
          <h4>State</h4>
          {node.state.length
            ? node.state.map((item) => (
                <div key={item.stateName} className="node__info__details">
                  <span>{item.hookName} </span> -<span> {item.stateName}</span>
                </div>
              ))
            : 'No state'}
        </div>
      )}
    </article>
  );
}
