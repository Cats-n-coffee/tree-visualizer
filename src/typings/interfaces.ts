export declare interface TreeComponent {
  name: string;
  parent: string;
  props: PropFormValue[];
  state: StateFormValue[];
}

export declare interface PropFormValue {
  propName: string;
  propValue: string;
}

export declare interface StateFormValue {
  stateName: string;
  hookName: string;
}

export declare interface AppProps {
  children: React.ReactNode;
}
