import type { Request, Response } from 'express'
import { logger } from '../utils/logger'
import vehicleService from '../services/vehicle.service'

const getVehicleById = async (req: Request, res: Response) => {
    logger.debug('inside vehicle controller')
    const vehicleId = req.params.vehicleId

    logger.debug(vehicleId)
    if (!vehicleId || isNaN(Number(vehicleId))) {
        throw new Error('Invalid vehicle ID');
    }

    const vehicleData = await vehicleService.getVehicleDataById(Number(vehicleId))

    res.send({ vehicleData })
}

export default { getVehicleById }