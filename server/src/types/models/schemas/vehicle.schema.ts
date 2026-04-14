import { z } from 'zod';

export const vehicleSchema = z.object({
    id: z.number(),
    vehicleNumber: z.number(),

    sug_degem: z.string().nullable(),
    manufacturer: z.string().nullable(),
    degem_cd: z.number().nullable(),
    degem_nm: z.string().nullable(),
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

    horaat_rishum: z.string().nullable(),
    firstRegistrationDate: z.string().nullable(),

    commercialName: z.string().nullable(),

    cancellationStatus: z.string().nullable(),
    cancellationDate: z.date().nullable(),
    licenseExpiryDate: z.date().nullable(),

    seats: z.number().nullable(),
    seatsNearDriver: z.number().nullable(),

    engineSerialCode: z.string().nullable(),
    kmOnLastTest: z.number().nullable(),

    hasDisabilityCard: z.boolean().nullable(),
    disabilityType: z.any().nullable(),
});