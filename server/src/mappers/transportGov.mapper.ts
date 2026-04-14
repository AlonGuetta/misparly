import { vehicleSchema } from "../types/models/schemas/vehicle.schema";
import type { Vehicle } from "../types/models/vehicle.type";

const transportationGovMapper = () => {

    const mapTransportGovVehicle = (raw: any, vehicleNumber: number): Vehicle => {
        const mapped = {
            id: Number(raw.basicData?._id ?? 0),
            vehicleNumber,

            sug_degem: raw.basicData?.sug_degem ?? null,
            manufacturer: raw.basicData?.tozeret_nm ?? null,
            degem_cd: raw.basicData?.degem_cd ?? null,
            degem_nm: raw.basicData?.degem_nm ?? null,
            trimLevel: raw.basicData?.ramat_gimur ?? null,

            safetyLevelRating: raw.basicData?.ramat_eivzur_betihuty ?? null,
            emissionLevelRating: raw.basicData?.kvutzat_zihum ?? null,

            registrationYear: raw.basicData?.shnat_yitzur ?? null,

            engineModel: raw.basicData?.degem_manoa ?? null,

            lastTest: raw.basicData?.mivchan_acharon_dt
                ? new Date(raw.basicData.mivchan_acharon_dt)
                : null,

            registrationExpiration: raw.basicData?.tokef_dt
                ? new Date(raw.basicData.tokef_dt)
                : null,

            ownershipType: null,

            vin: raw.basicData?.misgeret ?? null,

            tzeva_cd: raw.basicData?.tzeva_cd ?? null,
            color: raw.basicData?.tzeva_rechev ?? null,

            frontTireSize: raw.basicData?.mida_zmig_kdmi ?? null,
            rearTireSize: raw.basicData?.mida_zmig_ahori ?? null,

            fuelType: null,

            horaat_rishum: raw.basicData?.horaat_rishum ?? null,
            firstRegistrationDate: raw.basicData?.moed_aliya_lakvish ?? null,

            commercialName: raw.basicData?.kinuy_mishari ?? null,

            cancellationStatus: raw.basicData?.bitul_cd ?? null,
            cancellationDate: raw.basicData?.bitul_dt
                ? new Date(raw.basicData.bitul_dt)
                : null,

            licenseExpiryDate: raw.basicData?.tokef_dt
                ? new Date(raw.basicData.tokef_dt)
                : null,

            seats: raw.basicData?.mispar_mekomot ?? null,
            seatsNearDriver: raw.basicData?.mispar_mekomot_leyd_nahag ?? null,

            engineSerialCode: raw.historyData?.mispar_manoa ?? null,
            kmOnLastTest: raw.historyData?.kilometer_test_aharon ?? null,

            hasDisabilityCard: !!raw.tavNecheData,
            disabilityType: null,
        };

        return vehicleSchema.parse(mapped);
    }

    return {
        mapTransportGovVehicle
    }
}

export default transportationGovMapper()