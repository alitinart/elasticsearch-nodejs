import { Router } from "express";
import { createRecipe, getRecipeById } from "controllers/recipe.controller";

const router = Router();

router.post("/", createRecipe);
router.get("/:id", getRecipeById);

export default router;
