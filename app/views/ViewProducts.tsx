import Cards from "../components/Cards";
import { Product } from "../types/products";

type ViewProductsProps = {
  products: Product[];
  filter: string;
};
export const ViewProducts = ({ products, filter }: ViewProductsProps) => {
  const sortedProducts = [...products].sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return 0;
  });

  const productsFiltered = sortedProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.categories?.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {productsFiltered.map((p) => (
          <Cards
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            categories={p.categories}
            isNew={p.isNew}
          />
        ))}
      </div>
    </section>
  );
};
