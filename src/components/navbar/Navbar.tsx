import * as React from "react";
import ThemeToggle from "./buttons/ThemeToggle";

interface NavbarProps {
  setShow: React.Dispatch<React.SetStateAction<any>>;
}

export default function Navbar(props: NavbarProps) {
  const { setShow } = props;
  return (
    <nav className="navbar">
      <h1>
        React
        <br />
        Visualizer
      </h1>
      <div className="center navbar-sections">
        <section aria-label="add buttons" className="center navbar-add-buttons">
          <button onClick={() => setShow(true)}>Add Component</button>
        </section>
        <section
          aria-label="filters"
          className="center navbar-filters"
        ></section>
        <ThemeToggle />
      </div>
    </nav>
  );
}
