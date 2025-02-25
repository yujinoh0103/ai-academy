import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";

interface InputFormProps {
  onSubmit: (name: string) => void;
}

export function InputForm({ onSubmit }: InputFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
