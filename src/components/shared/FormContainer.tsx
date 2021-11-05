import * as React from "react";
import Form from "./Form";

interface FormContainerProps {
  setShow: React.Dispatch<React.SetStateAction<any>>;
}

export default function FormContainer(props: FormContainerProps) {
  const { setShow } = props;

  return (
    <div className="formContainer">
      <div className="formContainer__wrapper">
        <button className="btn" onClick={() => setShow(false)}>
          Close
        </button>
        <Form />
      </div>
    </div>
  );
}
