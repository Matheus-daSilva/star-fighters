import { Request, Response } from "express";
import { postBattleService } from "../services/battleService.js";

export async function postBattleController(req: Request, res: Response) {
    const {firstUser, secondUser} : {firstUser: string, secondUser: string} = req.body;
    const respo = await postBattleService(firstUser, secondUser);
    return res.send(respo);
}