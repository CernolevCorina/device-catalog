import { notFound } from "next/navigation";
import { Device } from "@/entities/device/model/types";

export async function getDevices(slug: string): Promise<Device> {
  const res = await fetch(`http://localhost:3000/api/devices/${slug}`);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch devices");
  }

  return res.json();
}
