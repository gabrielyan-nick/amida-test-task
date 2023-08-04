import { Button, Dropdown, Fade } from "react-bootstrap";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import { useActions } from "../hooks/useAction";

const Cart = () => {
  const { items, total } = useCart();
  const { resetCart } = useActions();

  return (
    <Dropdown autoClose="outside" align="end">
      <Dropdown.Toggle id="dropdown-cart">
        <svg
          width={40}
          height={40}
          className="me-3"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 .75H1a1 1 0 00-1 1v.5a1 1 0 001 1h2.012l2.724 11.481A4.25 4.25 0 009.765 18V18h7.822a4 4 0 003.943-3.325l1.256-7.338A2 2 0 0020.814 5H5.997l-.78-3.289A1.25 1.25 0 004 .75zM10 21a2 2 0 11-4 0 2 2 0 014 0zM21 21a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>

        <Fade in={!!items.length}>
          <div className="d-flex justify-content-center position-absolute">
            <span>{!!items.length && items.length}</span>
          </div>
        </Fade>
      </Dropdown.Toggle>

      <Dropdown.Menu
        className={`shadow-lg ${items.length > 5 && "cart-overflow"}`}
      >
        <ul>
          {items.length ? (
            items.map((item) => (
              <li key={item.id} className="py-1 px-2">
                <CartItem item={item} />
                <Dropdown.Divider className="m-1" />
              </li>
            ))
          ) : (
            <li className="px-4 py-3 fw-semibold">Cart is empty</li>
          )}
        </ul>
        {!!items.length && (
          <div className="d-flex justify-content-between px-2 gap-3">
            <p className="fs-18">
              Total: $<span className="fw-bold">{total.toFixed(2)}</span>
            </p>
            <Button
              variant="danger"
              className="py-0"
              onClick={() => resetCart()}
            >
              Clear Cart
            </Button>
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Cart;
