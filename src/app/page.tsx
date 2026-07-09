import Container from "@/shared/components/Containder";
import { getDevices } from "@/features/devices/list/api/get-devices";
import DevicesList from "@/features/devices/list/components/List";

export interface SearchParams {
  priceFrom?: string;
  priceTo?: string;
  brand?: string;
  sortField?: string;
  sortOrder?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const filters = await searchParams;
  const devices = await getDevices({
    sortField: "priceMDL",
    sortOrder: "DESC",
    ...filters,
  });

  return (
    <Container classNames={"flex flex-col gap-3 my-4 min-h-screen"}>
      <DevicesList devices={devices} />
    </Container>
  );
}
