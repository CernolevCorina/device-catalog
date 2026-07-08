import {z} from "zod";

export const querySchema = z.object({
	brand: z.string().optional(),
	priceFrom: z.coerce.number().min(0).optional(),
	priceTo: z.coerce.number().min(0).optional(),
	sortField: z.enum(['priceMDL']).optional(),
	sortOrder: z.enum(['ASC', 'DESC']).optional(),
});

export type querySchemaInterface = z.infer<typeof querySchema>;
