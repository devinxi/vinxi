import * as query from "../../../src/";
import { createQuery } from "../../../src";
import { delay } from "../../utils";
console.log(query);

const USERS = {
  1: {
    id: 1,
    name: "Joey"
  },
  2: {
    id: 2,
    name: "Jamie"
  }
};

export default function ({ params }) {
  console.log("getting user");
  const [user] = createQuery(
    () => [params.id],
    async ({ queryKey: [id] }) => {
      let data = await (await fetch("/api/users/" + id)).json();
      console.log(data);
      let user = await delay(250, data[id]);
      console.log("returning user", user);
      return user;
    }
  );

  return {
    user
  };
}
