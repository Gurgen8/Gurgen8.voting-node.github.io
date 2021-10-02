import express from "express";
import PeopleController from "../controllers/PeopleController";

const router = express.Router();

router.post('/', PeopleController.vote);

export default router;
