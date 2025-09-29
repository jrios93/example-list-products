import Buttons from "../data/buttons";
import SearchIcon from "../icons/SearchIcon";
import { Categorie } from "../types/categories";

type Props = {
  onAddProductClick: () => void;
  filter: string;
  setFilter: (filter: string) => void;
  categoryProduct: Categorie[];
};
export const Header = ({
  onAddProductClick,
  filter,
  setFilter,
  categoryProduct,
}: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleClickFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFilter(e.currentTarget.innerText);
  };
  return (
    <header className="mt-6 w-full flex items-center justify-between gap-4 p-2 ">
      <div className="hidden md:flex items-center gap-2">
        {categoryProduct.slice(0, 5).map((cat) => (
          <button
            key={cat.id}
            className="btn-filter"
            onClick={handleClickFilter}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className=" md:flex-1 md:flex justify-center relative">
        <input
          type="text"
          value={filter}
          onChange={handleInputChange}
          className="w-full max-w-lg bg-neutral-100 px-4 py-3 rounded-3xl outline-none placeholder:text-neutral-800"
          placeholder="Search"
        />
        <div className=" bg-white rounded-full absolute right-6 top-1.5 p-2 ">
          <SearchIcon className="text-xl" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {Buttons.slice(5).map((btn) =>
          btn.text === "Add Product" ? (
            <button
              key={btn.id}
              onClick={onAddProductClick}
              className="relative btn-filter border-2 border-transparent bg-white animate-border-gold flex items-center gap-2 hover:bg- amber-50 rounded-none "
            >
              <span className="text-lg font-bold">+</span>
              {btn.text}
            </button>
          ) : (
            <button
              key={btn.id}
              className="hidden md:block btn-filter"
              onClick={handleClickFilter}
            >
              {btn.text}
            </button>
          )
        )}
      </div>
    </header>
  );
};
