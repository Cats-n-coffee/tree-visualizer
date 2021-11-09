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
  name: string;
  props: Array<PropFormValue>;
  state: Array<StateFormValue>;
  parent: string | null;
  allChildren: Array<TreeNode>;
}
