import { SearchParams } from "@/app/page";
import { Device } from "@/entities/device/model/types";

export async function getDevices(filters: SearchParams): Promise<Device[]> {
  const baseUrl = "http://localhost:3000/api/devices";
  const url = new URL(baseUrl);

  const params = Object.fromEntries(
    Object.entries(filters).filter(([, value]) => value !== undefined),
  ) as Record<string, string>;
  url.search = new URLSearchParams(params).toString();

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch devices");
  }

  return res.json();
}
