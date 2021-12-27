import { client, observer } from "../src/index";
export function App() {
  console.log(client, observer);
  return <pre>{JSON.stringify({ d: null }, null, 2)}</pre>;
}
