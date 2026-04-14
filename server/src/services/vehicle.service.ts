import transportGovService from "./transportGov.service"
import transportationGovMapper from '../mappers/transportGov.mapper'
import type { Vehicle } from "../types/models/vehicle.type"
import { logger } from "../utils/logger"

const vehicleService = () => {
    const getVehicleDataById = async (vehicleNumber: number): Promise<Vehicle> => {
        const vehicleGovData = await transportGovService.getVehicleData(vehicleNumber)

        logger.debug(`mapping raw data for ${vehicleNumber}`)
        return transportationGovMapper.mapTransportGovVehicle(vehicleGovData, vehicleNumber)
    }

    return {
        getVehicleDataById
    }
}

export default vehicleService()