import type { Request, Response, NextFunction } from "express";
import esClient from "config/elastic.config";
import { randomUUID } from "crypto";
import { AppError } from "middleware/errorHandler";
import type { Recipe } from "models/recipe.model";

export const createRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = randomUUID();
    const body: Recipe = req.body;

    await esClient.index({
      index: "recipes",
      id,
      document: body,
    });

    await esClient.indices.refresh({ index: "recipes" });
    res.status(201).json({ id, ...body });
  } catch (err) {
    next(err);
  }
};

export const bulkCreateRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recipes: Recipe[] = req.body.recipes;

    const body = recipes.flatMap((recipe) => [
      { index: { _index: "recipes", _id: randomUUID() } },
      recipe,
    ]);

    await esClient.bulk({ refresh: true, body });

    res.status(201).json({ message: `${recipes.length} recipes created` });
  } catch (err) {
    next(err);
  }
};

export const getRecipeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params as { id: string };
    const { _source } = await esClient.get({ index: "recipes", id });
    res.json({ id, ..._source! });
  } catch (err: any) {
    if (err.meta?.statusCode === 404) {
      return next(new AppError("Recipe not found", 404));
    }

    next(err);
  }
};
