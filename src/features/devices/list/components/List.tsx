import { Device } from "@/entities/device/model/types";
import Filters from "@/features/devices/list/components/filters";
import DeviceCard from "@/shared/components/DeviceCard";

const DevicesList = ({ devices }: { devices: Device[] }) => {
  return (
    <>
      <Filters />
      {!devices.length && (
        <h1 className={"text-2xl text-primary"}>Oooops, nothing found</h1>
      )}

      <section
        className={
          "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }
      >
        {devices.map((device: Device) => (
          <DeviceCard device={device} key={device.id} />
        ))}
      </section>
    </>
  );
};

export default DevicesList;
