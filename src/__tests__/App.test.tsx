import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

test("renders the page", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", {
    name: /react visualizer/i,
  });
  expect(headingElement).toBeInTheDocument();
});
