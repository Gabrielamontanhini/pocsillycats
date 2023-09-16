import httpStatus from "http-status"
import { Request, Response } from "express"
import { SillyCat } from "../protocols"
import sillyServices from "../services/silly-services"


export async function getSillyCats(req: Request ,res: Response ) {
    try {
        const sillyCats = await sillyServices.get()
        res.status(httpStatus.OK).send(sillyCats.rows)
    } catch (error) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

export async function createSillyCat(req: Request ,res: Response) {
    const {catName}= req.body
    try {
        await sillyServices.create(catName)
        res.sendStatus(httpStatus.OK)
    } catch (error) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}


export async function deleteSillyCat(req: Request, res: Response) {
const {id}=req.params
try {
    const catId = Number(id)
    const deleted = await sillyServices.deleteCat(catId)
    res.status(httpStatus.OK).send(deleted)
} catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
}
}


export async function editSilliness(req: Request, res: Response) {
    const {iq} = req.body
    const {id}=req.params
    try {
        const catSilliness = Number(iq)
        const catId = Number(id)
        const result = await sillyServices.edit(catSilliness, catId)
        res.status(httpStatus.OK).send(result)
    } catch (error) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

