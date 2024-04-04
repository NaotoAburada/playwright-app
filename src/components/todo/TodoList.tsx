import React from "react";
import { TodoItem } from "./TodoItem";
import { useApiGet } from "../../utils/api";

export const TodoList: React.FC = () => {
  const todoList = useApiGet("todo-list");
  return (
    <>
      {todoList.map((todo) => {
        return <TodoItem itemName={todo.title}></TodoItem>;
      })}
    </>
  );
};
