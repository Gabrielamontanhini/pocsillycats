import joi from "joi"
import { SillyCat } from "../protocols"

export const catSchema = joi.object<SillyCat>({
    catName: joi.string().min(3).required()
})