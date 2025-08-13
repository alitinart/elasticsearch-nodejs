import express from "express";
import cors from "cors";

import recipeRoutes from "./routes/recipe.routes";
import searchRoutes from "routes/search.routes";

import { errorHandler } from "middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/recipe", recipeRoutes);
app.use("/api/search", searchRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
export default app;
