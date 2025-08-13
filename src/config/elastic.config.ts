import { Client } from "@elastic/elasticsearch";
import config from "./config";

const client = new Client({
  node: config.elastic_search_host,
});

export default client;
