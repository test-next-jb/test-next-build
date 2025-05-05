"use client";

import { useContext, useRef } from "react";
import { ChannelProductPathContext, ChannelProductPathContextProps } from "./ChannelProductPath";
import { CHANNEL_DEFAULT, PRODUCT_DEFAULT } from "../utils/detectChannelAndProduct";

interface ChannelProductPathProviderProps extends React.PropsWithChildren {
    channel: string;
    product: string;
    subPath: string;
}

export const ChannelProductPathProvider = ({
    children,
    channel,
    product,
    subPath,
}: ChannelProductPathProviderProps) => {
    const values = useRef({
        channel,
        product,
        subPath,
    }).current;
    return (
        <ChannelProductPathContext.Provider value={values}>
            {children}
        </ChannelProductPathContext.Provider>
    );
};

export const useChannelProductPath = (): ChannelProductPathContextProps => {
    const context = useContext(ChannelProductPathContext);
    if (!context) {
        return {
            channel: CHANNEL_DEFAULT,
            product: PRODUCT_DEFAULT,
            subPath: "main",
        }
    }
    return context;
};