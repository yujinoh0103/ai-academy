import { useState } from "react";
import { useCounter } from "../../../hooks/useCounter";

export function NewCounter() {
  const { count, addCount } = useCounter(55);

  return (
    <div>
      {count}
      <button onClick={addCount}>+</button>
    </div>
  );
}
