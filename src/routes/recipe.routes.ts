import { Router } from "express";
import {
  bulkCreateRecipe,
  createRecipe,
  deleteRecipe,
  getRecipeById,
} from "controllers/recipe.controller";

const router = Router();

router.post("/", createRecipe);
router.post("/bulk", bulkCreateRecipe);

router.get("/:id", getRecipeById);

router.delete("/:id", deleteRecipe);

export default router;
