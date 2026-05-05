import type { DisabilityType } from "../enums/disability.enum"
import type { FuelType } from "../enums/fuel.type"
import type { OwnershipType } from "../enums/ownership.type"

export type Vehicle = {
    id: number
    vehicleNumber: number
    sug_degem: string | null
    manufacturer: string | null
    degem_cd: number | null
    modelCode: string | null
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

    // wltp data
    taxGroup?: number | undefined
    engineDisplacement?: number | undefined
    totalWeight?: number | undefined
    height?: number | undefined
    drivetrain?: string | undefined
    isAirConditioned?: boolean | undefined
    isABS?: boolean | undefined
    airbags?: number | undefined
    isPowerSterring?: boolean | undefined
    isAutomatic?: boolean | undefined
    powerWindows?: number | undefined
    isSunroof?: boolean | undefined
    isAlloyWheels?: boolean | undefined
    bodystyle?: string | undefined // merkav
    doors?: number | undefined
    horsepower?: number | undefined
    isESP?: boolean | undefined
    market?: string | undefined //TODO: perhaps enum for EUDM USDM etc

    catalyticConverterType?: string | undefined
    engineTechnology?: string | undefined
    co2?: number | undefined
    nox?: number | undefined
    pm10?: number | undefined
    greenScale?: number | undefined

    isLaneKeepAssist?: boolean | undefined
    laneKeepAssistOrigin?: string | undefined
    isAutonumousBraking?: boolean | undefined
    autonumousBrakingOrigin?: string | undefined
    isBlindSpotMonitoring?: boolean | undefined
    isAdaptiveCruise?: boolean | undefined
    isPedestrianDetection?: boolean | undefined
    pedestrianDetectionOrigin?: string | undefined
    // maarechet_ezer_labalam_ind
    isReverseCamera?: boolean | undefined
    isTpms?: boolean | undefined
    isSeatbeltReinder?: boolean | undefined
    safetyRating?: number | undefined //nikud_betihut or ramat_eivzur_betihuty

    isAutoLights?: boolean | undefined
    isAutoHighBeams?: boolean | undefined
    isSignDetection?: boolean | undefined
    signDetectionOrigin?: string | undefined
}