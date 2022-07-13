import express from "express";
import battleR from "./battleRoute.js";
import rankingR from "./rankingRoute.js";

const router = express.Router()

router.use(battleR)
router.use(rankingR)

export default router