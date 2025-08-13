import { Router } from "express";
import {
  bulkCreateRecipe,
  createRecipe,
  getRecipeById,
} from "controllers/recipe.controller";

const router = Router();

router.post("/", createRecipe);
router.post("/bulk", bulkCreateRecipe);
router.get("/:id", getRecipeById);

export default router;
