"use client";
import { useEffect, useState } from "react";
import { AddFormProduct } from "./components/AddFormProduct";
import { Header } from "./components/Header";
import Nav from "./components/Nav";
import { ViewProducts } from "./views/ViewProducts";
import { Product } from "./types/products";
import { Categorie } from "./types/categories";
import { ProductExternal } from "./types/productExternal";

export default function Page() {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryProduct, setCategoryProduct] = useState<Categorie[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const resLocal = await fetch("/api/products");
      const localProducts: Product[] = await resLocal.json();

      const resExternal = await fetch(
        "https://api.escuelajs.co/api/v1/products"
      );
      const externalData = await resExternal.json();

      const externalProducts: Product[] = externalData.map(
        (p: ProductExternal) => ({
          id: p.id,
          name: p.title,
          price: p.price,
          image:
            p.images && p.images.length > 0
              ? p.images[0].replace(/["[\]]/g, "")
              : p.category?.image?.replace(/["[\]]/g, "") ?? undefined,
          categories: p.category.name,
        })
      );

      const resCategories = await fetch(
        "https://api.escuelajs.co/api/v1/categories"
      );
      const categoriesProducts: Categorie[] = await resCategories.json();
      setCategoryProduct([...categoriesProducts]);

      setProducts([...localProducts, ...externalProducts]);
    };
    fetchProducts();
  }, []);

  const handleProductAdded = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };
  return (
    <div className=" max-w-7xl p-6 m-auto relative">
      <Nav />
      <Header
        filter={filter}
        setFilter={setFilter}
        categoryProduct={categoryProduct}
        onAddProductClick={() => setIsOpen(!isOpen)}
      />
      {isOpen ? (
        <AddFormProduct
          closeModal={() => setIsOpen(false)}
          onProductAdded={handleProductAdded}
        />
      ) : (
        ""
      )}

      <main>
        <ViewProducts products={products} filter={filter} />
      </main>
    </div>
  );
}
