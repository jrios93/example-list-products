import Products from "@/app/data/products";
import { Product } from "@/app/types/products";
import { getAllProducts } from "@/app/utils/getAllProducts";

import { NextResponse } from "next/server";

export async function GET() {
  const allProducts = await getAllProducts();
  return NextResponse.json(allProducts);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, price, categories, image } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
    }
    if (!price || typeof price !== "number" || price <= 0) {
      return NextResponse.json({ error: "Precio inválido" }, { status: 400 });
    }
    const allProducts = await getAllProducts();

    const apiProduct = allProducts.find(
      (p: Product) => p.categories === categories && p.image
    );

    const newProduct = {
      id: Date.now(),
      name,
      price,
      categories: categories || "",
      image: image || apiProduct?.image || "https://placehold.co/600x400",
      isNew: true,
      createdAt: new Date().toISOString(),
    };

    Products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    console.error("POST /api/products error:", err);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
