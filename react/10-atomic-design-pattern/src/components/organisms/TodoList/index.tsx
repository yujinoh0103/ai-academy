interface TodoListProps {
  todos: string[];
  ItemRenderer: any;
  onDelete: (index: number) => void;
}

export function TodoList({ todos, ItemRenderer, onDelete }: TodoListProps) {
  return (
    <>
      {todos.map((todo, index) => (
        <ItemRenderer
          key={index}
          name={todo}
          onDelete={() => onDelete(index)}
        />
      ))}
    </>
  );
}
