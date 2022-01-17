declare interface TreeComponent {
  name: string;
  parent: string;
  props: PropFormValue[];
  state: StateFormValue[];
}

declare interface PropFormValue {
  propName: string;
  propValue: string;
}

declare interface StateFormValue {
  stateName: string;
  hookName: string;
}

declare interface AppProps {
  children: React.ReactNode;
}

declare interface TreeNode {
  id: string;
  name: string;
  props: PropFormValue[];
  state: StateFormValue[];
  parent: string | null;
  allChildren: TreeNode[];
}

declare interface NodeDOMToArray {
  id: string;
  name: string | null;
}

declare interface LinkPosition {
  pathValue: string;
}
