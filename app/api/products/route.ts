import Products from "@/app/data/products";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(Products);
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

    const newProduct = {
      id: Date.now(),
      name,
      price,
      categories: categories || "", 
      image: image || "",
      isNew: true,
      createdAt: new Date().toISOString(),
    };

    Products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
