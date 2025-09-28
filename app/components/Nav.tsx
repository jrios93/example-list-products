import CartIcon from "../icons/CartIcon";
import HamburgerMenu from "../icons/HamburgerMenu";
import HearthIcon from "../icons/HearthIcon";
import LoginIcon from "../icons/LoginIcon";
import ShopinLogo from "../icons/ShopinLogo";

const Nav = () => {
  return (
    <nav className="grid grid-cols-3 items-center">
      <div className="btn-shared ">
        <HamburgerMenu className="text-xl" />
      </div>
      <p className="flex justify-center items-center gap-2">
        <ShopinLogo className="text-2xl" />
        <span className="text-xl font-bold">LogoCompany</span>
      </p>
      <ul className="flex gap-2 justify-end">
        <li className="btn-shared ">
          <a href="#">
            <HearthIcon />
          </a>
        </li>
        <li className="btn-shared ">
          <a href="#">
            <CartIcon />
          </a>
        </li>
        <li className="btn-shared ">
          <a href="#">
            <LoginIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
