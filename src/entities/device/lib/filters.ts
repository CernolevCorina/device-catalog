import {Device} from "@/entities/device/model/types";
import {querySchemaInterface} from "@/entities/device/model/querySchema";

type FilterMethod = {
	[K in keyof querySchemaInterface]: (
		data: Device[],
		value: NonNullable<querySchemaInterface[K]>
	) => Device[];
};

export function filterDevices (data: Device[], query: querySchemaInterface) {
	const methods: FilterMethod = {
		brand: (data, value) => data.filter((device) => device.brand === value),
		priceFrom: (data, value) => data.filter((device) => device.priceMDL >= value),
		priceTo: (data, value) => data.filter((device) => device.priceMDL <= value),
	}

	let devices: Device[] = data;

	(Object.entries(query) as [
		keyof querySchemaInterface,
		querySchemaInterface[keyof querySchemaInterface]
	][]).forEach(([key, value]) => {
		if (methods[key] && value !== undefined) {
			devices = methods[key](
				devices,
				value as never
			);
		}
	})

	return devices;
}
