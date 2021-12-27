import { QueryObserver, QueryClient } from "react-query/core";

const client = new QueryClient();
const observer = new QueryObserver(client, {
  queryKey: "key",
  queryFn: () => Promise.resolve("data")
});

console.log(observer);

export { client, observer };
