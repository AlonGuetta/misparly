import type { Vehicle } from '../types/models/vehicle.type'

const wltpMapper = () => {
    const mappedWltpData = (raw: any): Partial<Vehicle> => {
        const record = raw?.[0] ?? raw //TODO: check

        return {
            taxGroup: record?.kvuzat_agra_cd ?? undefined,
            engineDisplacement: record?.nefah_manoa ?? undefined,
            totalWeight: record?.mishkal_kolel ?? undefined,
            height: record?.gova ?? undefined,
            drivetrain: record?.hanaa_nm ?? undefined,

            isAirConditioned: record?.mazgan_ind === 1,
            isABS: record?.abs_ind === 1,
            airbags: record?.mispar_kariot_avir ?? undefined,
            isPowerSteering: record?.hege_koah_ind === 1,
            isAutomatic: record?.automatic_ind === 1,
            powerWindows: record?.mispar_halonot_hashmal ?? undefined,
            isSunroof: record?.halon_bagg_ind === 1,
            isAlloyWheels: record?.galgaley_sagsoget_kala_ind === 1,

            bodStyle: record?.merkav ?? undefined,
            doors: record?.mispar_dlatot ?? undefined,
            horsepower: record?.koah_sus ?? undefined,
            seats: record?.mispar_moshavim ?? undefined,
            isESP: record?.bakarat_yatzivut_ind === 1,
            market: record?.sug_tkina_nm ?? undefined,

            catalyticConverterType: record?.sug_mamir_nm ?? undefined,
            engineTechnology: record?.technologiat_hanaa_nm ?? undefined,

            co2: record?.CO2_WLTP ?? record?.kamut_CO2 ?? undefined,
            nox: record?.NOX_WLTP ?? record?.kamut_NOX ?? undefined,
            pm10: record?.PM_WLTP ?? record?.kamut_PM10 ?? undefined,
            greenScale: record?.madad_yarok ?? undefined,

            isLaneKeepAssist: record?.bakarat_stiya_menativ_ind === 1,
            laneKeepAssistOrigin: record?.bakarat_stiya_menativ_makor_hatkana ?? undefined,

            isAutonomousBraking: record?.nitur_merhak_milfanim_ind === 1,
            autonomousBrakingOrigin: record?.nitur_merhak_milfanim_makor_hatkana ?? undefined,

            isBlindSpotMonitoring: record?.zihuy_beshetah_nistar_ind === 1,
            isAdaptiveCruise: record?.bakarat_shyut_adaptivit_ind === 1,

            isPedestrianDetection: record?.zihuy_holchey_regel_ind === 1,
            pedestrianDetectionOrigin: record?.zihuy_holchey_regel_makor_hatkana ?? undefined,

            isReverseCamera: record?.matzlemat_reverse_ind === 1,
            isTpms: record?.hayshaney_lahatz_avir_batzmigim_ind === 1,
            isSeatbeltReminder: record?.hayshaney_hagorot_ind === 1,

            safetyRating: record?.nikud_betihut ?? record?.ramat_eivzur_betihuty ?? undefined,

            isAutoLights: record?.teura_automatit_benesiya_kadima_ind === 1,
            isAutoHighBeams: record?.shlita_automatit_beorot_gvohim_ind === 1,

            isSignDetection: record?.zihuy_tamrurey_tnua_ind === 1,
            signDetectionOrigin: record?.zihuy_tamrurey_tnua_makor_hatkana ?? undefined,
        }
    }

    return {
        mapWltpData: mappedWltpData,
    }
}

export default wltpMapper()