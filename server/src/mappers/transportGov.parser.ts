export const parseGovNumericDate = (
    value?: number | string | null
): Date | null => {
    if (!value) return null;

    const str = String(value);

    if (str.length !== 8) return null;

    return new Date(
        Number(str.slice(0, 4)),
        Number(str.slice(4, 6)) - 1,
        Number(str.slice(6, 8))
    );
};