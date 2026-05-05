import transportGovService from "./transportGov.service"
import transportationGovMapper from '../mappers/transportGov.mapper'
import type { Vehicle } from "../types/models/vehicle.type"
import { logger } from "../utils/logger"
import wltpMapper from "../mappers/wltp.mapper"

const vehicleService = () => {
    const getVehicleDataById = async (vehicleNumber: number): Promise<Vehicle> => {
        const vehicleGovData = await transportGovService.getVehicleData(vehicleNumber)

        logger.debug(`mapping raw data for ${vehicleNumber}`)

        const completeVehicleData = transportationGovMapper.mapTransportGovVehicle(vehicleGovData, vehicleNumber)

        return enrichVehicle(completeVehicleData)
    }

    const getModelCount = async (modelName: string, trimLevel: string): Promise<number> =>
        transportGovService.getModelCountEstimation(modelName, trimLevel)

    const getModelWltpData = async (modelCode: string, registrationYear: number): Promise<unknown> =>
        transportGovService.getVehicleWltpData(modelCode, registrationYear)

    const enrichVehicle = async (vehicle: Vehicle): Promise<Vehicle> => {
        const numberOfSameVehicle = await getModelCount(
            vehicle.commercialName ?? '',
            vehicle.trimLevel ?? ''
        )

        const extraWltpData = await getModelWltpData(
            vehicle.modelCode ?? '',
            vehicle.registrationYear ?? 0
        )

        logger.debug(`mapping wltp data for ${vehicle.vehicleNumber}`)
        const mappedWltpData = wltpMapper.mapWltpData(extraWltpData)

        return {
            ...vehicle,
            numberOfSameVehicle,
            ...mappedWltpData
        }
    }


    return {
        getVehicleDataById
    }
}

export default vehicleService()