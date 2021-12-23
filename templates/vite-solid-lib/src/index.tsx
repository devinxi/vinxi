import { createSignal } from "solid-js";

export const CounterButton = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div
      style={{
        background: `rgba(255,255,255,.05)`,
        borderRadius: `8px`,
        padding: 16,
      }}
    >
      <p>
        This is component from <code>ui</code>
      </p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count {count}
        </button>
      </p>
    </div>
  );
};
