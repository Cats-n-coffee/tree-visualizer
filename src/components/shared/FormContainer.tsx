import * as React from "react";
import Form from "./Form";
import { NewComponent } from "../../@types/interfaces";

interface FormContainerProps {
  setShow: React.Dispatch<React.SetStateAction<any>>;
}

export default function FormContainer(props: FormContainerProps) {
  const { setShow } = props;

  function handleSubmit(newComponent: NewComponent) {
    console.log("submitted", newComponent);
  }

  return (
    <div className="formContainer">
      <div className="formContainer__wrapper">
        <button className="btn" onClick={() => setShow(false)}>
          Close
        </button>
        <Form handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
