import styles from "./styles.module.css";

interface InputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ name, value, onChange }: InputProps) {
  return (
    <input
      className={styles.input}
      type="text"
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}
