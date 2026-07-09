import { getDevices } from "@/entities/device/api/get-devices";
import { querySchema } from "@/entities/device/model/querySchema";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = Object.fromEntries(searchParams);

  const validationResult = querySchema.safeParse(query);

  if (!validationResult.success) {
    return Response.json(
      {
        error: validationResult.error.issues,
      },
      {
        status: 400,
      },
    );
  }

  const devices = getDevices(query);

  return Response.json(devices);
}
