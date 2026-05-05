import { z } from 'zod';

export const vehicleSchema = z.object({
    id: z.number(),
    vehicleNumber: z.number(),

    sug_degem: z.string().nullable(),
    manufacturer: z.string().nullable(),
    degem_cd: z.number().nullable(),
    modelCode: z.string().nullable(),
    trimLevel: z.string().nullable(),

    safetyLevelRating: z.number().nullable(),
    emissionLevelRating: z.number().nullable(),

    registrationYear: z.number().nullable(),

    engineModel: z.string().nullable(),

    lastTest: z.date().nullable(),
    registrationExpiration: z.date().nullable(),

    ownershipType: z.any().nullable(),

    vin: z.string().nullable(),

    tzeva_cd: z.number().nullable(),
    color: z.string().nullable(),

    frontTireSize: z.string().nullable(),
    rearTireSize: z.string().nullable(),

    fuelType: z.any().nullable(),

    horaat_rishum: z.number().nullable(),
    firstRegistrationDate: z.string().nullable(),

    commercialName: z.string().nullable(),

    cancellationStatus: z.string().nullable(),
    cancellationDate: z.date().nullable(),
    licenseExpiryDate: z.date().nullable(),

    engineSerialCode: z.string().nullable(),
    kmOnLastTest: z.number().nullable(),

    hasDisabilityCard: z.boolean().nullable(),
    disabilityType: z.any().nullable(),
    disabilityCardIssuedAt: z.date().nullable(),

    numberOfSameVehicle: z.number().optional(),

    // wltp data
    taxGroup: z.number().optional(),
    engineDisplacement: z.number().optional(),
    totalWeight: z.number().optional(),
    height: z.number().optional(),
    drivetrain: z.string().optional(),

    isAirConditioned: z.boolean().optional(),
    isABS: z.boolean().optional(),
    airbags: z.number().optional(),
    isPowerSteering: z.boolean().optional(),
    isAutomatic: z.boolean().optional(),
    powerWindows: z.number().optional(),
    isSunroof: z.boolean().optional(),
    isAlloyWheels: z.boolean().optional(),

    bodyStyle: z.string().optional(),
    doors: z.number().optional(),
    horsepower: z.number().optional(),
    seats: z.number().optional(),
    isESP: z.boolean().optional(),
    market: z.string().optional(),

    catalyticConverterType: z.string().optional(),
    engineTechnology: z.string().optional(),
    co2: z.number().optional(),
    nox: z.number().optional(),
    pm10: z.number().optional(),
    greenScale: z.number().optional(),

    isLaneKeepAssist: z.boolean().optional(),
    laneKeepAssistOrigin: z.string().optional(),
    isAutonomousBraking: z.boolean().optional(),
    autonomousBrakingOrigin: z.string().optional(),
    isBlindSpotMonitoring: z.boolean().optional(),
    isAdaptiveCruise: z.boolean().optional(),
    isPedestrianDetection: z.boolean().optional(),
    pedestrianDetectionOrigin: z.string().optional(),

    isReverseCamera: z.boolean().optional(),
    isTpms: z.boolean().optional(),
    isSeatbeltReminder: z.boolean().optional(),
    safetyRating: z.number().optional(),

    isAutoLights: z.boolean().optional(),
    isAutoHighBeams: z.boolean().optional(),
    isSignDetection: z.boolean().optional(),
    signDetectionOrigin: z.string().optional(),
});