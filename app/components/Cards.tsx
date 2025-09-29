import Image from "next/image";
import CartIcon from "../icons/CartIcon";
import HearthIcon from "../icons/HearthIcon";
import ImageNotIcon from "../icons/ImageNotIcon";

interface CardProps {
  name: string;
  price: number;
  categories: string;
  image?: string;
  isNew?: boolean;
}

const Cards = ({ name, price, image, categories, isNew }: CardProps) => {
  console.log("imagen que llega", image);
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 relative">
      {isNew && (
        <span className="absolute top-1 right-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded">
          New
        </span>
      )}
      <span className="text-neutral-500">{categories}</span>
      <div className="flex justify-between text-xl font-bold text-neutral-700">
        <p>{name}</p>
        <p>${price}</p>
      </div>

      {/* Contenedor de imagen mejorado */}
      <div className="flex justify-center items-center mt-6">
        <div className="w-full h-[280px] flex items-center justify-center bg-white rounded-lg overflow-hidden border-2 border-dashed border-neutral-200">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <ImageNotIcon className="text-[6rem] text-neutral-300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
