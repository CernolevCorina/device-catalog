import Image from "next/image";
import Container from "@/shared/components/Containder";
import { Device } from "@/entities/device/model/types";

const DeviceItem = ({ device }: { device: Device }) => {
  return (
    <Container classNames={"my-10 flex-col justify-items-center min-h-screen"}>
      <h1>{`${device.brand} ${device.model}`}</h1>
      <Image
        src={device.image}
        alt={`${device.brand} ${device.model}`}
        width={300}
        height={300}
      />
      <p>{Object.values(device.specs).join(", ")}</p>
    </Container>
  );
};

export default DeviceItem;
