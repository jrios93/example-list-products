import ShopinLogo from "../icons/ShopinLogo";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="flex justify-center items-center gap-2">
        <ShopinLogo className="text-2xl" />
        <span className="text-xl font-bold">LogoCompany</span>
      </a>
    </nav>
  );
};

export default Nav;
