import { createSignal } from "solid-js";

export const Button = () => {
  const [count, setCount] = createSignal(0);
  return <button onClick={() => setCount(c => c + 1)}>{count()}</button>;
};
