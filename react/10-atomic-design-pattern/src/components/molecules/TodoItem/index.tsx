import { Button } from "../../atoms/Button";

interface TodoItemProps {
  name: string;
  onDelete: () => void;
}

export function TodoItem({ name, onDelete }: TodoItemProps) {
  return (
    <div>
      {name}
      <Button onClick={onDelete} variant="secondary">
        삭제
      </Button>
    </div>
  );
}
