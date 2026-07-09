import { Device } from "@/entities/device/model/types";
import { querySchemaInterface } from "@/entities/device/model/querySchema";

type SortField = NonNullable<querySchemaInterface["sortField"]>;
type SortOrder = NonNullable<querySchemaInterface["sortOrder"]>;

export function sortDevices(
  data: Device[],
  sortOrder?: SortOrder,
  sortField?: SortField,
): Device[] {
  if (!sortField || !sortOrder) {
    return data;
  }

  return data.toSorted((a, b) =>
    sortOrder === "ASC"
      ? a[sortField] - b[sortField]
      : b[sortField] - a[sortField],
  );
}
