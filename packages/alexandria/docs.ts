import { ApiModel, ApiPackage } from "@microsoft/api-extractor-model";
const apiModel: ApiModel = new ApiModel();
const apiPackage: ApiPackage = apiModel.loadPackage("./public/solid-three.api.json");
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://qksyrtriwpguwrkxyekd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDc3NjQ4NSwiZXhwIjoxOTU2MzUyNDg1fQ.anrvkkFNQwp_Fao1DvQnaD56yJ1ucFNrAt3Q4Iw3jqQ"
);

import { schema } from "./schema/src/schema";
let exportList = [];

// console.log(apiPackage.name);
for (const member of apiPackage.entryPoints) {
  for (var m of member.members) {
    // console.log(m.displayName);
  }
}

import express, { RequestHandler } from "express";
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  shouldRenderGraphiQL,
  sendResult
} from "graphql-helix";
import { queryType, stringArg, makeSchema } from "nexus";

const app = express();
const Query = queryType({
  definition(t) {
    t.string("hello", {
      args: { name: stringArg() },
      resolve: (parent, { name }) => `Hello ${name || "World"}!`
    });
  }
});

const _schema = makeSchema({
  types: [Query],
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/typings.ts"
  }
});
app.use(express.json());
app.use(cors());

app.use("/graphql", async (req, res) => {
  // Create a generic Request object that can be consumed by Graphql Helix's API
  const request = {
    body: req.body,
    headers: req.headers,
    method: req.method,
    query: req.query
  };

  // Determine whether we should render GraphiQL instead of returning an API response
  if (shouldRenderGraphiQL(request)) {
    res.send(renderGraphiQL());
  } else {
    // Extract the Graphql parameters from the request
    const { operationName, query, variables } = getGraphQLParameters(request);

    // Validate and execute the query
    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema
    });

    // processRequest returns one of three types of results depending on how the server should respond
    // 1) RESPONSE: a regular JSON payload
    // 2) MULTIPART RESPONSE: a multipart response (when @stream or @defer directives are used)
    // 3) PUSH: a stream of events to push back down the client for a subscription
    // The "sendResult" is a NodeJS-only shortcut for handling all possible types of Graphql responses,
    // See "Advanced Usage" below for more details and customizations available on that layer.
    sendResult(result, res);
  }
});

app.use("/", (req, res) => {});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`GraphQL server is running on port ${port}.`);
});

// (async () => {
//   let { data } = await supabase.from("packages").select("*");

//   console.log(data);
// })(); // .then(res => {})
// .catch(err => console.error(err));

// app.get("/members", (req, res) => {
//   res.json(apiPackage.serializeInto);
// });
