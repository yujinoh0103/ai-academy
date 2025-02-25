import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { useForm } from "../../../hooks/useForm";

interface FormData {
  name: string;
}

interface InputFormProps {
  onSubmit: (data: string) => void;
}

export function InputForm({ onSubmit }: InputFormProps) {
  const { data, handleChange, handleSubmit } = useForm<FormData>({
    initialValues: {
      name: "",
    },
    onSubmit: (data) => {
      onSubmit(data.name);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" value={data.name} onChange={handleChange} />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
