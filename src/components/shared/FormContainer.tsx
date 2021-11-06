import * as React from "react";
import Form from "./Form";
import { TreeComponent } from "../../@types/interfaces";
import { CrossIcon } from "./Icons";

interface FormContainerProps {
  setShow: React.Dispatch<React.SetStateAction<any>>;
}

export default function FormContainer(props: FormContainerProps) {
  const { setShow } = props;

  function handleSubmit(newComponent: TreeComponent) {
    console.log("submitted", newComponent);
  }

  return (
    <div className="formContainer">
      <div className="formContainer__wrapper">
        <button
          className="btn btn__icon"
          onClick={() => setShow(false)}
          style={{ marginLeft: "auto" }}
        >
          <CrossIcon />
        </button>
        <Form handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
