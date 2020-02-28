import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

it("renders without crashing", function(){
  render(<TodoForm />);
});

it("matches snapshot", function(){
  const { asFragment } = render(<TodoForm />);
  expect(asFragment()).toMatchSnapshot();
});