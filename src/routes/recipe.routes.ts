import { Router } from "express";
import {
  bulkCreateRecipe,
  createRecipe,
  deleteRecipe,
  getRecipeById,
  updateRecipe,
} from "controllers/recipe.controller";

const router = Router();

router.post("/", createRecipe);
router.post("/bulk", bulkCreateRecipe);

router.get("/:id", getRecipeById);

router.patch("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

export default router;
