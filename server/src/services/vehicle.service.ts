import transportGovService from "./transportGov.service"

const vehicleService = () => {
    const getVehicleDataById = async (vehicleId: number) => transportGovService.getVehicleData(vehicleId)

    return {
        getVehicleDataById
    }
}

export default vehicleService()