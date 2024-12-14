import { useContext } from "react";
import inr, { formatINR } from "../utils/currency";
import CartUpdater from "./CartUpdater";
import { CartContext } from "../App";

export default function CartProduct({ prodId }) {
  const { cart } = useContext(CartContext);
  const product = cart.find((item) => item.id === prodId);
  const total = product.price * product.quantity;

  return (
    <div className="flex items-center justify-center gap-4">
      <img src={product.image} alt="Product Image" className="w-1/6 border" />

      <div className="flex h-full w-4/6 flex-col justify-between px-4">
        <h3 className="line-clamp-3 py-1">{product.title}</h3>

        <h3 className="">{inr(product.price)}</h3>

        <CartUpdater prodId={product.id} />
      </div>

      <h2 className="w-1/6 px-2 text-center font-bold">{inr(total)}</h2>
    </div>
  );
}
