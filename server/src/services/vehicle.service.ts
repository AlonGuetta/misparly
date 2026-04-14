import transportGovService from "./transportGov.service"
import transportationGovMapper from '../mappers/transportGov.mapper'
import type { Vehicle } from "../types/models/vehicle.type"

const vehicleService = () => {
    const getVehicleDataById = async (vehicleNumber: number): Promise<Vehicle> => {
        const vehicleGovData = transportGovService.getVehicleData(vehicleNumber)

        return transportationGovMapper.mapTransportGovVehicle(vehicleGovData, vehicleNumber)
    }

    return {
        getVehicleDataById
    }
}

export default vehicleService()