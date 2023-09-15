import { Router } from "express";
import sillyCatsControllers from "../controllers/sillycats-controllers";

const sillyCatRouter = Router()

sillyCatRouter.get("/sillycat", sillyCatsControllers.getSillyCats)
sillyCatRouter.post("/sillycat", sillyCatsControllers.createSillyCat)
sillyCatRouter.delete("/sillycat/:id", sillyCatsControllers.deleteSillyCat)
sillyCatRouter.patch("/sillycat/:id", sillyCatsControllers.editSilliness)

export default sillyCatRouter