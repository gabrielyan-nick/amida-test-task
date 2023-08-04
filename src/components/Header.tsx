import Cart from "./Cart";

const Header = () => {
  return (
    <header className="position-sticky top-0 z-3 shadow-lg d-flex align-items-center justify-content-between py-2 px-4 rounded-bottom-3">
      <h1 className="logo">NEON</h1>
      <Cart />
    </header>
  );
};

export default Header;
