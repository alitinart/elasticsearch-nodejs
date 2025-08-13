import { Router } from "express";
import { getDocument, indexDocument } from "../controllers/document.controller";

const router = Router();

router.post("/index", indexDocument);
router.get("/:id", getDocument);

export default router;
