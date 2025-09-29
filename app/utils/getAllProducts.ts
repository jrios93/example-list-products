import Products from "../data/products";
import { ProductExternal } from "../types/productExternal";
import { Product } from "../types/products";

export const getAllProducts = async (): Promise<Product[]> => {
  const resExternal = await fetch("https://api.escuelajs.co/api/v1/products");
  const externalData: ProductExternal[] = await resExternal.json();

  const externalProducts: Product[] = externalData.map((p) => ({
    id: p.id,
    name: p.title,
    price: p.price,
    image:
      p.images && p.images.length > 0
        ? p.images[0].replace(/["[\]]/g, "")
        : p.category?.image?.replace(/["[\]]/g, "") ??
          "https://placehold.co/600x400",
    categories: p.category.name,
    isNew: false,
    createdAt: new Date().toISOString(),
  }));

  return [...Products, ...externalProducts];
};
