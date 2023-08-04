import { useAppSelector } from "./redux-hooks";

const useCart = () => {
  const { items } = useAppSelector((s) => s.cart);
  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return { items, total };
};
export default useCart;
