import dynamic from "next/dynamic";
import { getChannelAndProduct } from "../_shared/utils/detectChannelAndProduct";
import { notFound, redirect } from "next/navigation";
import { ChannelProductPathProvider } from "../_shared/provider/ChannelProductPathProvider";
import { getRedirectPath } from "../_shared/utils/redirectPath";

export async function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["bcp"] },
    { slug: ["bcp", "cotizacion"] },
    { slug: ["bcp", "autoefectivo"] },
    { slug: ["bcp", "autoefectivo", "cotizacion"] },
    { slug: ["autoefectivo"] },
    { slug: ["autoefectivo", "cotizacion"] },
  ];
}


const strategyPageToView = new Map([
  ["main", dynamic(() => import("../_(features)/main/page"))],
  ["cotizacion", dynamic(() => import("../_(features)/cotizacion/page"))],
]);

export default async function Page({
  params,
}: {
  readonly params: Promise<{ slug: string[] }>
}) {
  const { slug = [] } = await params;

  const { channel, product, pathCurrent } = getChannelAndProduct(slug);

  const redirectPath = getRedirectPath(channel, product, slug);

  if (redirectPath) {
    redirect(redirectPath);
  }

  const ComponentView = strategyPageToView.get(pathCurrent);

  if (!ComponentView) {
    return notFound();
  }

  return (
    <ChannelProductPathProvider channel={channel} product={product} subPath={pathCurrent}>
      <ComponentView />
    </ChannelProductPathProvider>
  );
}