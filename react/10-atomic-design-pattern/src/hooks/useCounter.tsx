import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const addCount = () => {
    setCount(count + 1);
  };

  return { count, addCount };
}
