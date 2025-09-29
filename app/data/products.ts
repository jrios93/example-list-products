const Products = [
  {
    id: 1,
    name: "Zapatos Nike",
    price: 150,
    image: "/images/products/nike.avif",
    categories: "shoes",
    isNew: false,
    createdAt: "2025-09-29T00:00:00.000Z",
  },
  {
    id: 2,
    name: "Adidas Run",
    price: 200,
    image: "/images/products/adidas.avif",
    categories: "shoes",
    isNew: true,
    createdAt: new Date().toISOString(),
  },
];

export default Products;
