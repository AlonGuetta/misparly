import { z } from 'zod';
import { OwnershipType } from '../../enums/ownership.type';

export const ownershipSchema = z
    .string()
    .nullable()
    .transform((value): OwnershipType | null => {
        if (!value) return null;

        switch (value) {
            case 'פרטי':
                return OwnershipType.PRIVATE;
            case 'ליסינג':
                return OwnershipType.LEASING;
            case 'השכרה':
                return OwnershipType.RENTAL;
            case 'מונית':
                return OwnershipType.TAXI;
            default:
                return null; // unknown value from gov
        }
    });