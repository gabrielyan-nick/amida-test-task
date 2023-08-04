import { useActions } from "../hooks/useAction";
import useCart from "../hooks/useCart";
import { IProduct } from "../types/product.types";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { addToCart, removeFromCart } = useActions();
  const { items } = useCart();
  const currentItem = items.find(
    (cartItem) => cartItem.product.id == product.id
  );

  const toggleCartItem = () => {
    currentItem
      ? removeFromCart({ id: currentItem.id })
      : addToCart({ product, quantity: 1 });
  };

  return (
    <Card className="mx-auto rounded-3 shadow-lg">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="h-50 object-fit-cover rounded-t-3"
      />
      <Card.Body className="p-2 d-flex flex-column">
        <Card.Title className="fw-bold primary-text">
          {product.title.length > 30
            ? product.title.slice(0, 30) + "..."
            : product.title}
        </Card.Title>
        <p className="my-1 fs-6 text-light">
          {product.description.length > 40
            ? product.description.slice(0, 40) + "..."
            : product.description}
        </p>
        <div className="mt-auto position-relative">
          <span className="fs-5 fw-semibold price primary-text rounded-2">
            ${product.price}
          </span>
          <Button
            className="add-to-cart-btn p-1 rounded-2 text-light"
            onClick={toggleCartItem}
          >
            {currentItem ? "Remove" : "Add to Cart"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
