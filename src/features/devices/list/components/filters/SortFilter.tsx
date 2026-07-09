const SortFilter = ({
  onChange,
}: {
  onChange: (value: string, name: string) => void;
}) => {
  return (
    <select
      name="sortOrder"
      className={
        "w-full rounded-lg border border-light px-3 py-2 text-sm outline-none focus:border-primary"
      }
      onChange={(e) => {
        onChange(e.target.value, "sortOrder");
      }}
    >
      <option value="DESC">Price: High to Low</option>
      <option value="ASC">Price: Low to High</option>
    </select>
  );
};

export default SortFilter;
