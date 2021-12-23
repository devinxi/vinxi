import { log } from "@vinxi/logger";
import { CounterButton } from "@vinxi/vite-react-lib";

export default function Store() {
  log("Hey! This is Home.");
  return (
    <div>
      <h1>Store</h1>
      <CounterButton />
    </div>
  );
}
