import * as React from 'react';

import { useTreeContext } from 'context/TreeContext';
import TreeContainer from './tree/TreeContainer';

interface BodyProps {
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Body(props: BodyProps): React.ReactElement {
  const { setShowDelete } = props;
  const { tree } = useTreeContext();

  return (
    <main className="body">
      <div className="treeContainer">
        <TreeContainer tree={tree} setShowDelete={setShowDelete} />
      </div>
    </main>
  );
}
