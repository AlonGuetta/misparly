import type { DisabilityType } from "../enums/disability.enum"
import type { FuelType } from "../enums/fuel.type"
import type { OwnershipType } from "../enums/ownership.type"

export type Vehicle = {
    id: number
    vehicleNumber: number
    sug_degem: string | null
    manufacturer: string | null
    degem_cd: number | null
    degem_nm: string | null
    trimLevel: string | null
    safetyLevelRating: number | null
    emissionLevelRating: number | null
    registrationYear: number | null
    engineModel: string | null
    lastTest: Date | null
    registrationExpiration: Date | null
    ownershipType: OwnershipType | null
    vin: string | null
    tzeva_cd: number | null
    color: string | null
    frontTireSize: string | null
    rearTireSize: string | null
    fuelType: FuelType | null
    horaat_rishum: number | null
    firstRegistrationDate: string | null
    commercialName: string | null

    // used in: search by kinuy mishari
    // "bitul_cd": "0",
    cancellationStatus: string | null
    cancellationDate: Date | null
    licenseExpiryDate: Date | null
    seats: number | null
    seatsNearDriver: number | null

    // used in: HISTORIAT_KLEY_RECHEV
    engineSerialCode: string | null
    kmOnLastTest: number | null

    // used in: tav neche
    hasDisabilityCard: boolean | null
    disabilityType: DisabilityType | null

    // extra data
    numberOfSameVehicle?: number | undefined
}