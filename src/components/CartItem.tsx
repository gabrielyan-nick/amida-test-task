import { ICartItem } from "../types/cart.types";
import { Button } from "react-bootstrap";
import { useActions } from "../hooks/useAction";

const CartItem = ({ item }: { item: ICartItem }) => {
  const { changeQuantity, removeFromCart } = useActions();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <p className="fw-semibold">
          {item.product.title.length > 25
            ? item.product.title.slice(0, 25) + "..."
            : item.product.title}
        </p>
        <Button
          variant="secondary"
          className="p-1"
          onClick={() => removeFromCart({ id: item.id })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </Button>
      </div>
      <div className="d-flex justify-content-end gap-3 align-items-center mt-2">
        <div className="d-flex">
          <Button
            variant="secondary"
            className="quantity-btn rounded-end-0"
            onClick={() => changeQuantity({ id: item.id, type: "plus" })}
          >
            +
          </Button>
          <span className="px-1 bg-light">{item.quantity}</span>
          <Button
            variant="secondary"
            className="quantity-btn rounded-start-0"
            onClick={() => changeQuantity({ id: item.id, type: "minus" })}
            disabled={item.quantity < 2}
          >
            -
          </Button>
        </div>
        <span className="fw-semibold fs-18">
          ${(item.product.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default CartItem;
