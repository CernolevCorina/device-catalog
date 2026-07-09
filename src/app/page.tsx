import DeviceCard from "@/shared/components/device-card";
import {Device} from "@/entities/device/model/types";
import Container from "@/shared/components/Containder";
import Filters from "@/features/devices/list/components/filters";

interface SearchParams {
  priceFrom?: string;
  priceTo?: string;
  brand?: string;
  sortField?: string;
  sortOrder?: string;
}

async function getDevices(filters: SearchParams): Promise<Device[]> {
  const baseUrl = "http://localhost:3000/api/devices";
  const url = new URL(baseUrl);

  const params = Object.fromEntries(
    Object.entries(filters).filter(([, value]) => value !== undefined)
  ) as Record<string, string>;
  url.search = new URLSearchParams(params).toString();

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch devices");
  }

  return res.json();
}

export default async function Home({searchParams}: {
  searchParams: Promise<SearchParams>;
}) {
  const filters = await searchParams;
  const devices = await getDevices({
    sortField: "priceMDL",
    sortOrder: "DESC",
    ...filters,
  });

  return (
    <Container classNames={'flex flex-col gap-3 my-4 min-h-screen'}>
      <Filters />
      {!devices.length && (<h1 className={'text-2xl text-primary'}>Oooops, nothing found</h1>)}

       <section className={'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}>
         {devices.map((device: Device) => (<DeviceCard device={device} key={device.id} />))}
       </section>
    </Container>
  );
}
