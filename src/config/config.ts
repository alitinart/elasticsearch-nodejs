import dotenv from "dotenv";

dotenv.config();

type Config = {
  port: number;
  elastic_search_host: string;
  redis_host: string;
};

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  elastic_search_host: process.env.ELASTICSEARCH_HOST!,
  redis_host: process.env.REDIS_HOST!,
};

export default config;
