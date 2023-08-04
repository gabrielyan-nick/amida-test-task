import { IProduct } from "./product.types";

export interface ICartItem {
  id: number;
  product: IProduct;
  quantity: number;
}

export interface ICartInitialState {
  items: ICartItem[];
}

export interface IAddToCartPayload extends Omit<ICartItem, "id"> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, "id"> {
  type: "minus" | "plus";
}
