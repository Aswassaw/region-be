import { Router } from "express";
import ProvinceController from "../controllers/ProvinceController";

const router = Router();

router.get("/provinces", ProvinceController.findAll);
router.get("/province/:id", ProvinceController.findById);
router.post("/province", ProvinceController.add);
router.put("/province/:id", ProvinceController.edit);
router.delete("/province/:id", ProvinceController.deleteById);

export default router;
