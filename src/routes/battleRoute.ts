import express from "express";
import { postBattleController } from "../controllers/battleController.js";

const battleR = express.Router();

battleR.post("/battle", postBattleController)

export default battleR