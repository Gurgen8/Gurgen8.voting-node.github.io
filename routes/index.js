import express from "express";
import candidates from "./candidates";
import people from "./people";

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ title: 'Express' });
});
router.use('/candidates', candidates);
router.use('/people', people);

export default router;
