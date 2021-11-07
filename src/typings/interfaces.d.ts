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
