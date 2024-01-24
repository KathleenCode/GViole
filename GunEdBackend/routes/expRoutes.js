import express from "express";
import ExpController from "../controller/expControlller.js";

const router = express.Router()

router.post('/', ExpController.addExp);
router.get('/', ExpController.getExps);
router.put('/:id', ExpController.UpExp);
router.delete('/:id', ExpController.delExp);

export default router;