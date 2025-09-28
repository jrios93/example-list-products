"use client";

import { FocusTrap } from "focus-trap-react";
import { useEffect, useState } from "react";
import { Product } from "../types/products";

type Props = {
  closeModal: () => void;
  onProductAdded: (product: Product) => void;
};

export const AddFormProduct = ({ closeModal, onProductAdded }: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const handleEsc = (e: WindowEventMap["keydown"]) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          price: Number(price),
        }),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Error al agregar un producto");
      }

      const newProduct = await res.json();
      onProductAdded(newProduct);
      closeModal();
    } catch (err) {
      console.error("Error en handleSubmit:", err);
      setError("No se pudo agregar el producto. Intenta nuevamente.");
    }
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <FocusTrap>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <div className="flex flex-col gap-6 relative">
            <div className="text-center ">
              <button
                onClick={closeModal}
                className="absolute -top-5 right-0 text-2xl cursor-pointer"
              >
                X
              </button>
              <h1 className="text-2xl font-bold text-neutral-800">
                Agregar Producto
              </h1>
              <p className="text-sm text-neutral-500">
                Complete los datos para registrar un nuevo producto
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium text-neutral-700">
                  Nombre
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ingrese el nombre del producto"
                  className="border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium text-neutral-700">
                  Precio
                </span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) =>
                    setPrice(e.target.value ? Number(e.target.value) : "")
                  }
                  placeholder="Ingrese el importe"
                  className="border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-3 rounded-xl w-full font-medium hover:bg-blue-800 transition cursor-pointer"
            >
              Agregar Producto
            </button>
            {error && <p>{error}</p>}
          </div>
        </form>
      </FocusTrap>
    </div>
  );
};
