import { createServer } from "./server";
import { log } from "@vinxi/logger";

const port = process.env.PORT || 5000;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});
