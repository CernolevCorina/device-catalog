import type { Metadata } from "next";
import { getDevices } from "@/features/devices/details/api/get-devices";
import { mapMetadata } from "@/features/devices/details/lib/map-metadata";
import DeviceItem from "@/features/devices/details/components/Item";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const device = await getDevices(slug);

  return mapMetadata(device);
}

const DevicePage = async ({ params }: Props) => {
  const { slug } = await params;

  const device = await getDevices(slug);

  return <DeviceItem device={device} />;
};

export default DevicePage;
