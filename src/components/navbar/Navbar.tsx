import * as React from "react";
import ThemeToggle from "./buttons/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        React
        <br />
        Visualizer
      </h1>
      <div className="center navbar-sections">
        <section
          aria-label="add buttons"
          className="center navbar-add-buttons"
        ></section>
        <section
          aria-label="filters"
          className="center navbar-filters"
        ></section>
        <ThemeToggle />
      </div>
    </nav>
  );
}
