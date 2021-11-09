import * as React from "react";

import { useTreeContext } from "context/TreeContext";
import TreeContainer from "./tree/TreeContainer";

export default function Body() {
  const { tree } = useTreeContext();
  return (
    <main className="body">
      <div className="treeContainer">
        <TreeContainer tree={tree} />
      </div>
    </main>
  );
}
