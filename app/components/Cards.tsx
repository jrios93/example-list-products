import CartIcon from "../icons/CartIcon";
import HearthIcon from "../icons/HearthIcon";
import ImageNotIcon from "../icons/ImageNotIcon";

interface CardProps {
  name: string;
  price: number;
}
const Cards = ({ name, price }: CardProps) => {
  return (
    <div className="bg-neutral-100 p-6 rounded-xl shadow-sm">
      <span className="text-neutral-500">Shoes</span>
      <div className="flex justify-between text-xl font-bold text-neutral-700">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <ImageNotIcon className="text-[20rem] text-neutral-300" />
      </div>
      <div className="grid grid-cols-2 gap-4 items-center mt-6">
        <div className="flex gap-2 flex-wrap">
          {["42", "43", "44"].map((size) => (
            <label key={size}>
              <input type="checkbox" value={size} className="hidden peer" />
              <span className="peer-checked:bg-neutral-800 peer-checked:text-white px-3 py-2 rounded-full border border-neutral-400 cursor-pointer">
                {size}
              </span>
            </label>
          ))}
        </div>
        <div className="flex gap-2 justify-end">
          <button className="px-1 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 transition cursor-pointer">
            <HearthIcon className="text-xl text-neutral-700" />
          </button>

          <button className="px-4 py-2 rounded-full bg-blue-900 text-white flex items-center gap-2 hover:bg-blue-700 transition cursor-pointer">
            <span className="text-sm font-medium">Add to Bag</span>
            <CartIcon className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
