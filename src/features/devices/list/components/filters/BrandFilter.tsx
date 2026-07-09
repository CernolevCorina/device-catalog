import {brands} from "@/features/devices/list/data/brands";

const BrandFilter = ({onChange}: {onChange: (value: string, name: string) => void}) => {
	return <select
		name="brand"
		className={"w-full rounded-lg border border-light px-3 py-2 text-sm outline-none focus:border-primary"}
		onChange={(e) => {
			onChange(e.target.value, 'brand')
		}}
	>
		<option value="">Select...</option>
		{brands.map((option) => (
			<option
				key={option.value}
				value={option.value}
			>
				{option.label}
			</option>
		))}
	</select>
}

export default BrandFilter;
