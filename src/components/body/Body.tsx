import * as React from 'react';

import { useTreeContext } from 'context/TreeContext';
import TreeContainer from './tree/TreeContainer';
import LinkContainer from './links/LinkContainer';

interface BodyProps {
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Body(props: BodyProps): React.ReactElement {
  const { setShowDelete, setShowForm } = props;
  const { tree } = useTreeContext();

  return (
    <main className="body">
      <LinkContainer tree={tree} />
      <div className="treeContainer">
        <TreeContainer
          tree={tree}
          setShowDelete={setShowDelete}
          setShowForm={setShowForm}
        />
      </div>
    </main>
  );
}
