import { useState } from "react";

interface FormProps<T> {
  initialValues: T;
  onSubmit: (data: T) => void;
}

export function useForm<T extends object>({
  initialValues,
  onSubmit,
}: FormProps<T>) {
  const [data, setData] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setData(initialValues);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data);
    reset();
  };

  return { data, handleChange, reset, handleSubmit };
}
