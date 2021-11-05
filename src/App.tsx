import * as React from "react";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import FormContainer from "./components/shared/FormContainer";

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <div id="container">
      {show && <FormContainer />}
      <Navbar setShow={setShow} />
      <Body />
    </div>
  );
}

export default App;
