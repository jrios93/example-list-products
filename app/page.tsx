"use client";
import { useEffect, useState } from "react";
import { AddFormProduct } from "./components/AddFormProduct";
import { Header } from "./components/Header";
import Nav from "./components/Nav";
import { ViewProducts } from "./views/ViewProducts";
import { Product } from "./types/products";

export default function Page() {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleProductAdded = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };
  return (
    <div className=" max-w-7xl p-6 m-auto relative">
      <Nav />
      <Header filter={filter} setFilter={setFilter} onAddProductClick={() => setIsOpen(!isOpen)} />
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
