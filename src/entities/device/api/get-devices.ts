import {devices} from "@/entities/device/data/devices";
import {filterDevices} from "@/entities/device/lib/filters";
import {sortDevices} from "@/entities/device/lib/sorting";
import {querySchemaInterface} from "@/entities/device/model/querySchema";
import {Device} from "@/entities/device/model/types";

export function getDevices(query: querySchemaInterface) {
	let data: Device[] = devices;

	data = filterDevices(data, query);

	data = sortDevices(data, query.sortOrder, query.sortField);

	return data;
}
