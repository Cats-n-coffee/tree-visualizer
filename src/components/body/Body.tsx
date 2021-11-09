import * as React from "react";

import { useTreeContext } from "context/TreeContext";
import TreeContainer from "./tree/TreeContainer";

export default function Body() {
  const { tree } = useTreeContext();
  return (
    <main className="body">
      Body component
      <TreeContainer tree={tree} />
    </main>
  );
}
