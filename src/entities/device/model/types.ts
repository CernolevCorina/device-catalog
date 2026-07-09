interface Specs {
  display?: string;
  storage?: string;
  battery: string;
  type?: string;
  anc?: string;
}

export interface Device {
  id: string;
  slug: string;
  brand: string;
  model: string;
  category: string;
  priceMDL: number;
  oldPriceMDL: number | null;
  inStock: boolean;
  badge: string | null;
  specs: Specs;
  image: string;
}
