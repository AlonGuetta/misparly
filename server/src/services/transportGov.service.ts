import 'dotenv/config'
import { logger } from '../utils/logger'
import type { RawGovRecord } from '../types/models/transportGov/transportGov.type';

type ResourceKey =
    | 'basicVehicleData'
    | 'commercialNameData'
    | 'vehicleHistoryData'
    | 'tavNecheData'
    | 'modelEstimation'
    | 'wltpInfo';

type FilterParams = {
    vehicleNumber?: number
    modelName?: string
    trimLevel?: string
    modelCode?: string
    registrationYear?: number
}

const transportGovService = () => {
    const RESOURCE_IDS: Record<ResourceKey, string | undefined> = {
        basicVehicleData: process.env.BASIC_RECHEV_SEARCH,
        commercialNameData: process.env.KINUY_MISHARI_SEARCH,
        vehicleHistoryData: process.env.HISTORIAT_KLEY_RECHEV,
        tavNecheData: process.env.TAV_NECHE_SEARCH,
        modelEstimation: process.env.BASIC_RECHEV_SEARCH,
        wltpInfo: process.env.WLTP_VEHICLE_INFO
    };

    //TODO: check if general filter is needed
    const FILTERS: Record<ResourceKey, (params: FilterParams) => string> = {
        basicVehicleData: ({ vehicleNumber }: FilterParams) => `&filters={"mispar_rechev":${vehicleNumber}}&limit=1`,
        commercialNameData: ({ vehicleNumber }: FilterParams) => `&filters={"mispar_rechev":${vehicleNumber}}`,
        vehicleHistoryData: ({ vehicleNumber }: FilterParams) => `&filters={"mispar_rechev":${vehicleNumber}}&limit=1`,
        tavNecheData: ({ vehicleNumber }: FilterParams) => `&filters={"MISPAR RECHEV":${vehicleNumber}}&limit=1`,
        modelEstimation: ({ modelName, trimLevel }: FilterParams) =>
            `&filters={"ramat_gimur":"${trimLevel}", "kinuy_mishari":"${modelName}"}`,
        wltpInfo: ({ modelCode, registrationYear }: FilterParams) =>
            `&filters={"degem_nm":"${modelCode}", "shnat_yitzur": ${registrationYear}}`
    }

    const fetchResource = async (
        requestType: ResourceKey,
        params: FilterParams,
    ): Promise<RawGovRecord[]> => { //TODO: make type work
        let url = (process.env.GOV_API_LINK || '') + (process.env.GOV_API_LINK_EXTENSION || '')
        // its in here because i need to init a new url with each function call otherwise i'll 
        // get a bigger concat url each call

        url += RESOURCE_IDS[requestType]
        url += FILTERS[requestType](params)

        const res = await fetch(url);

        if (!res.ok) {
            logger.error(res.body)
            console.log(res)
            throw new Error(`TransportGov API error: ${res.status}`);
        }
        logger.debug(`fetched resource: ${requestType} for params: ${JSON.stringify(params)}`)

        const json = await res.json();

        return json.result?.records ?? [];
    };


    const getVehicleData = async (vehicleNumber: number): Promise<unknown> => {
        const [basic, history, tavNeche, commercialData] = await Promise.all([
            fetchResource('basicVehicleData', { vehicleNumber }),
            fetchResource('vehicleHistoryData', { vehicleNumber }),
            fetchResource('tavNecheData', { vehicleNumber }),
            fetchResource('commercialNameData', { vehicleNumber })
        ]);

        logger.debug(`fetched all data for: ${vehicleNumber}`)
        return {
            basicData: basic[0] ?? null,
            historyData: history[0] ?? null,
            tavNecheData: tavNeche[0] ?? null,
            commercialNameData: commercialData[0] ?? null
        };
    }

    /** uses the 1st basic search command only with 2 other params, trim level and model name
     * to count how many similar vehicle can there be.
     * TODO: check efficiency on larger scale
     * @param modelName - model name, like COROLLA, GOLF etc...
     * @param trimLevel - trim level like EX, COMFORTLINE etc...
     * @returns number of similar vehicles, should be greater than 1
     */
    const getModelCountEstimation = async (modelName: string, trimLevel: string): Promise<number> => {
        const result = await fetchResource('modelEstimation', { modelName, trimLevel })
        return result.length
    }

    const getVehicleWltpData = async (modelCode: string, registrationYear: number): Promise<unknown> => {
        const result = await fetchResource('wltpInfo', { modelCode, registrationYear })

        return result
    }


    return {
        getVehicleData,
        getModelCountEstimation,
        getVehicleWltpData
    }
}

export default transportGovService()