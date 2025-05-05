import { CHANNEL_DEFAULT, PRODUCT_DEFAULT } from "./detectChannelAndProduct";

export function getRedirectPath(channel: string, product: string, slug: string[]): string {
    if (channel === CHANNEL_DEFAULT && product === PRODUCT_DEFAULT && slug.length > 0) {
        return '/';
    }
    if (product === PRODUCT_DEFAULT && slug.length > 1) {
        return `/${channel}`;
    }
    return '';
}