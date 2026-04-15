import { z } from 'zod';
import { DisabilityType } from '../../enums/disability.enum';

export const disabilityTypeSchema = z
    .any()
    .transform((value): DisabilityType | null => {
        if (!value) return null;

        switch (value) {
            case 1:
            case '1':
                return DisabilityType.GENERAL;
            case 2:
            case '2':
                return DisabilityType.MOBILITY_IMPAIRMENT;
            default:
                return null;
        }
    });