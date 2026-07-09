import { devices } from "@/entities/device/data/devices";

export function getDeviceBySlug(slug: string) {
  return devices.find((device) => device.slug === slug);
}
