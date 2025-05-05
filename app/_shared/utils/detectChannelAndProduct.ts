export const CHANNEL_DEFAULT = "PACIFICO"
export const PRODUCT_DEFAULT = "PACIFICO"
export const CHANNELS = new Set(["bcp", "io", "bbva"]);
const PRODUCT_ALLRISK = "todoriesgo";
const PRODUCT_EXPERIENCE = "experiencia";
const PRODUCT_LEADS = "formulario";
const PRODUCT_CASHCAR = "autoefectivo";
export const PRODUCTS = new Set([
    PRODUCT_EXPERIENCE,
    PRODUCT_ALLRISK,
    PRODUCT_LEADS,
    PRODUCT_CASHCAR,
])


const getSegmentValue = function <T>(
    segments: string[],
    index: number,
    validValues: Set<string>,
    defaultValue: T
): T {
    const value = segments[index] ?? "";
    return (validValues.has(value) ? value : defaultValue) as T;
};


export const getChannelAndProduct = (params: string[] = []): {
    channel: string;
    product: string;
    pathCurrent: string;
} => {
    const channel = getSegmentValue(params, 0, CHANNELS, CHANNEL_DEFAULT);
    const indexProduct = params.indexOf(channel) + 1;
    const product = getSegmentValue(params, indexProduct, PRODUCTS, PRODUCT_DEFAULT);
    const lengthVerified = [channel, product].filter((item) => item !== CHANNEL_DEFAULT).length;
    const pathCurrent = params[lengthVerified] ?? "main";

    return { channel, product, pathCurrent };
};