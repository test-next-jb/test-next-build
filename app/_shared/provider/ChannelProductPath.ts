import { createContext } from 'react';

export interface ChannelProductPathContextProps {
    channel: string;
    product: string;
    subPath: string;
}

export const ChannelProductPathContext = createContext<ChannelProductPathContextProps | undefined>(undefined);

export const BackendClientProvider = ChannelProductPathContext.Provider;
