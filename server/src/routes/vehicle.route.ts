import { Router } from "express";
import vehicleController from "../controllers/vehicle.controller";

const router = Router();

router.get('/:vehicleId', vehicleController.getVehicleById);

export default router
