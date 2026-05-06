import z from "zod";
import { FuelType } from "../../enums/fuel.type";

export const fuelTypeSchema = z
    .string()
    .nullable()
    .transform((value): FuelType | null => {
        if (!value) return null;

        switch (value) {
            case 'בנזין':
                return FuelType.GASOLINE;
            case 'דיזל':
                return FuelType.DIESEL;
            case 'חשמל':
                return FuelType.ELECTRIC;
            case 'חשמל/בנזין':
                return FuelType.PLUG_IN_HYBRID;
            default:
                return null;
        }
    });