import {getDeviceBySlug} from "@/entities/device/api/get-device-by-slug";
import {NextRequest} from "next/server";

interface RouteParams {
	params: Promise<{
		slug: string;
	}>;
}

export async function GET(
	request: NextRequest,
	{ params }: RouteParams) {
	const {slug} = await params;
	const device = await getDeviceBySlug(slug);

	if (!device) {
		return Response.json(
			{
				message: "Device not found",
			},
			{
				status: 404,
			}
		);
	}

	return Response.json(device);
}
