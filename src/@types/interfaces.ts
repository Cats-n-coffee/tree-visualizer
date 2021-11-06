export interface TreeComponent {
  name: string;
  parent: string;
  props: PropFormValue[];
  state: StateFormValue[];
}

export interface PropFormValue {
  propName: string;
  propValue: string;
}

export interface StateFormValue {
  stateName: string;
  hookName: string;
}
