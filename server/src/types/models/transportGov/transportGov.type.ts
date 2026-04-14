export type RawGovRecord = Record<string, unknown>;

export type TransportGovVehicleData = {
    basicData: RawGovRecord | null;
    historyData: RawGovRecord | null;
    tavNecheData: RawGovRecord | null;
    commercialNameData: RawGovRecord | null
};