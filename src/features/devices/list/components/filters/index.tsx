"use client";

import PriceFilter from "@/features/devices/list/components/filters/PriceFilter";
import BrandFilter from "@/features/devices/list/components/filters/BrandFilter";
import SortFilter from "@/features/devices/list/components/filters/SortFilter";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Filters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filters, setFilters] = useState({
    priceFrom: searchParams.get("priceFrom") || "",
    priceTo: searchParams.get("priceTo") || "",
    brand: searchParams.get("brand") || "",
    sortField: searchParams.get("sortField") || "priceMDL",
    sortOrder: searchParams.get("sortOrder") || "DESC",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.set("priceFrom", filters.priceFrom);
    params.set("priceTo", filters.priceTo);
    params.set("brand", filters.brand);
    params.set("sortField", "priceMDL");
    params.set("sortOrder", filters.sortOrder);

    router.push(`?${params.toString()}`);
  };

  const handleReset = () => {
    setFilters({
      priceFrom: "",
      priceTo: "",
      brand: "",
      sortOrder: "DESC",
      sortField: "priceMDL",
    });

    router.push("?sortField=priceMDL&sortOrder=DESC");
  };

  const handleFilterChange = (value: string, name: string) => {
    setFilters({ ...filters, [name]: value });
  };

  return (
    <form
      className={"flex flex-col sm:flex-row gap-2"}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <PriceFilter onChange={handleFilterChange} />
      <BrandFilter onChange={handleFilterChange} />
      <SortFilter onChange={handleFilterChange} />
      <div className={"flex gap-2"}>
        <button
          type={"submit"}
          className="rounded bg-primary px-4 py-2 text-foreground cursor-pointer"
        >
          Apply
        </button>
        <button
          type={"reset"}
          className="rounded bg-dark px-4 py-2 text-foreground cursor-pointer"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Filters;
