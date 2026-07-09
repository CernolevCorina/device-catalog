import { Device } from "@/entities/device/model/types";

export const mapMetadata = (device: Device) => {
  return {
    title: `${device.brand} ${device.model}`,
    description: Object.values(device.specs).join(", "),
    openGraph: {
      title: `${device.brand} ${device.model}`,
      description: Object.values(device.specs).join(", "),
      images: [
        {
          url: device.image,
          width: 300,
          height: 300,
        },
      ],
    },
  };
};
