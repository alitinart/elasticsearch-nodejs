import app from "./app";
import config from "./config/config";

const { port } = config;

app.listen(port, (err) => {
  if (err) return console.log("Error while starting service", err);

  console.log(`Search API listening on port: ${port}`);
});
