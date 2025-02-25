import { useEffect, useState } from "react";
import { InputForm } from "../../molecules/InputForm";
import { TodoList } from "../../organisms/TodoList";
import { TodoItem } from "../../molecules/TodoItem";
import { TodoTemplate } from "../../templates/TodoTemplate";
import { NewCounter } from "../../organisms/NewCounter";
import { useTodo } from "../../../hooks/useTodo";
import { useChangeTitle } from "../../../hooks/useChangeTitle";

export function TodoPage() {
  const { todos, addTodo, deleteTodo } = useTodo();

  useChangeTitle(`Todo Page: ${todos.length}`);

  return (
    <TodoTemplate>
      <NewCounter />
      <InputForm onSubmit={addTodo} />
      <TodoList todos={todos} ItemRenderer={TodoItem} onDelete={deleteTodo} />
    </TodoTemplate>
  );
}
