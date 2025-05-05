"use client"

import { useChannelProductPath } from "../../_shared/provider/ChannelProductPathProvider";

const Page = () => {
    const { channel, product, subPath } = useChannelProductPath();
    return (
        <h3>{channel} - {product} - {subPath}</h3>
    )
}

export default Page
