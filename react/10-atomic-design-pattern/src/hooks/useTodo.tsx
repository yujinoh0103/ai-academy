import { useState } from "react";

export function useTodo() {
  // todos 상태 설정
  const [todos, setTodos] = useState<string[]>([]);

  // todo 추가 함수
  const addTodo = (name: string) => {
    setTodos([...todos, name]);
  };

  // todo 삭제 함수
  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return { todos, addTodo, deleteTodo };
}
