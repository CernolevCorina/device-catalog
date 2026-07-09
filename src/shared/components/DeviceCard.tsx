import { Device } from "@/entities/device/model/types";
import Image from "next/image";
import Link from "next/link";

const DeviceCard = ({ device }: { device: Device }) => {
  return (
    <Link href={`/devices/${device.slug}`}>
      <article
        className={
          "rounded-2xl h-full border border-light bg-foreground p-6 hover:-translate-y-1 transition-all duration-200 flex-col justify-items-center"
        }
      >
        <Image
          src={device.image}
          alt={`${device.brand} ${device.model}`}
          width={120}
          height={120}
        />

        <p
          className={"text-primary font-bold text-lg"}
        >{`${device.priceMDL} MDL`}</p>
        {device.oldPriceMDL && (
          <p
            className={"line-through text-xs"}
          >{`${device.oldPriceMDL} MDL`}</p>
        )}

        <h2>{`${device.brand} ${device.model}`}</h2>
        <p>{Object.values(device.specs).join(", ")}</p>
      </article>
    </Link>
  );
};

export default DeviceCard;
