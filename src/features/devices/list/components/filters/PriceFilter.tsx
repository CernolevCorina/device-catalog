const PriceFilter = ({onChange}: {onChange: (value: string, name: string) => void}) => {
	return <>
		<input
			type="number"
			min={0}
			onChange={(e) =>
				onChange(e.target.value, 'priceFrom')
			}
			name="priceFrom"
			placeholder="From"
			className="w-full rounded-lg border border-light px-3 py-2 text-sm outline-none focus:border-primary"
		/>
		<input
			type="number"
			min={0}
			onChange={(e) =>
				onChange(e.target.value, 'priceTo')
			}
			name="priceTo"
			placeholder="To"
			className="w-full rounded-lg border border-light px-3 py-2 text-sm outline-none focus:border-primary"
		/>
	</>
};

export default PriceFilter;
