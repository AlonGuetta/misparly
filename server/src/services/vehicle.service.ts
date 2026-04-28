import transportGovService from "./transportGov.service"
import transportationGovMapper from '../mappers/transportGov.mapper'
import type { Vehicle } from "../types/models/vehicle.type"
import { logger } from "../utils/logger"

const vehicleService = () => {
    const getVehicleDataById = async (vehicleNumber: number): Promise<Vehicle> => {
        const vehicleGovData = await transportGovService.getVehicleData(vehicleNumber)

        logger.debug(`mapping raw data for ${vehicleNumber}`)

        const completeVehicleData = transportationGovMapper.mapTransportGovVehicle(vehicleGovData, vehicleNumber)

        completeVehicleData.numberOfSameVehicle = await getModelCount(completeVehicleData.commercialName || ''
            , completeVehicleData.trimLevel || '')

        return completeVehicleData
    }

    const getModelCount = async (modelName: string, trimLevel: string): Promise<number> =>
        transportGovService.getModelCountEstimation(modelName, trimLevel)


    return {
        getVehicleDataById
    }
}

export default vehicleService()