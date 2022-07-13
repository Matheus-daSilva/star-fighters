import express from "express";
import { getRankingController } from "../controllers/rankingController.js";

const rankingR = express()

rankingR.get("/ranking", getRankingController)

export default rankingR