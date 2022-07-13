import { Response, Request, NextFunction} from "express";

export async function errorHandler(error, req: Request, res: Response, next: NextFunction) {
    console.log(`error on errorHandler, ${error.message}`);
    if (error.type === "not_found") {
        return res.status(404).send(error.message)
    }

    return res.status(500).send("Internal server error")
}