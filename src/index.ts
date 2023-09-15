import express , { Request, Response, json }  from "express"
import httpStatus from "http-status";
import sillyCatRouter from "./routers/sillycats-routes";

const app = express()
app.use(json())
app.use(sillyCatRouter)
app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK)
})

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Server is up and ready to serve! On port ${port}`);
})
