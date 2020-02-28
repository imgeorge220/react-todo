import React from "react";
import { render, queryByLabelText, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";


it("renders without crashing", function(){
  render(<TodoList />);
});

it("matches snapshot", function(){
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("shows a todo after submit", function (){
  const { getByLabelText, queryByText, queryByTestId } = render(<TodoList />);

  expect(queryByTestId("todo-container")).toBeInTheDocument();

  const todo = getByLabelText("Todo:")
  const submitBtn = queryByText("Add Todo!");

  fireEvent.change(todo, {target: {value: "new thing"}})
  fireEvent.click(submitBtn);

  expect(queryByTestId("todo")).toBeInTheDocument();
})

it("removes a todo after click", function(){
  const { getByLabelText, queryByText, queryByTestId } = render(<TodoList />);

  expect(queryByTestId("todo-container")).toBeInTheDocument();

  const todoInput = getByLabelText("Todo:")
  const submitBtn = queryByText("Add Todo!");

  fireEvent.change(todoInput, {target: {value: "new thing"}})
  fireEvent.click(submitBtn);

  let todo = queryByTestId("todo");

  expect(todo).toBeInTheDocument();

  fireEvent.click(todo);

  expect(todo).not.toBeInTheDocument();
})