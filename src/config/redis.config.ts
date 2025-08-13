import { createClient } from "redis";
import config from "config/config";

const client = createClient({
  url: config.redis_host,
});
client.on("error", (err) => console.log("Redis Error", err));

await client.connect();

export default client;
