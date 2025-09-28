import Cards from "../components/Cards";
import { Product } from "../types/products";

type ViewProductsProps = {
  products: Product[];
  filter: string;
};
export const ViewProducts = ({ products, filter }: ViewProductsProps) => {
  const productsFiltered = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {productsFiltered.map((p) => (
          <Cards key={p.id} name={p.name} price={p.price} />
        ))}
      </div>
    </section>
  );
};
