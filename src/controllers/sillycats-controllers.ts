import httpStatus from "http-status";

function getSillyCats(req: Request, res: Response) {
    try {

    } catch (error) {
        res.sendStatus(500);
    }
}

function createSillyCat(req: Request, res: Response) {

}

function deleteSillyCat(req: Request, res: Response) {

}

function editSilliness(req: Request, res: Response) {

}

const sillyCatsControllers = {
    getSillyCats, createSillyCat, deleteSillyCat, editSilliness
}

export default sillyCatsControllers