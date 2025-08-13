import type { Request, Response, NextFunction } from "express";
import { AppError } from "middleware/errorHandler";

import redisClient from "config/redis.config";
import esClient from "config/elastic.config";
import config from "config/config";

export const search = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { q } = req.query as { q: string };
    if (!q) throw new AppError("Missing query param", 400);

    const cacheKey = `search:${q}`;
    const cached = await redisClient.get(cacheKey);

    if (cached) {
      return res.json({ hits: JSON.parse(cached), cache: true });
    }

    const { hits } = await esClient.search({
      index: "recipes",
      query: {
        multi_match: {
          query: q,
          fields: ["title", "ingredients", "tags"],
        },
      },
    });

    const results = hits.hits.map((h) => ({ id: h._id, ...h._source! }));
    await redisClient.setEx(
      cacheKey,
      config.cache_time,
      JSON.stringify(results)
    );
    res.json({ hits: results, cache: false });
  } catch (err) {
    next(err);
  }
};
