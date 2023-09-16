import { Router } from "express";
import { createSillyCat, deleteSillyCat, editSilliness, getSillyCats } from "../controllers/sillycats-controllers";

const sillyCatRouter = Router()

sillyCatRouter.get("/sillycat", getSillyCats)
sillyCatRouter.post("/sillycat", createSillyCat)
sillyCatRouter.delete("/sillycat/:id", deleteSillyCat)
sillyCatRouter.patch("/sillycat/:id", editSilliness)

export default sillyCatRouter