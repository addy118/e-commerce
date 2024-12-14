import { formatINR } from "../utils/currency";
import CartUpdater from "./CartUpdater";

export default function CartProduct({ cart, setCart, prodId }) {
  const product = cart.find((item) => item.id === prodId);
  const total = product.price * product.quantity;

  return (
    <div className="flex items-center justify-center gap-4">
      <img src={product.image} alt="Product Image" className="w-1/6 border" />

      <div className="flex h-full w-4/6 flex-col justify-between px-4">
        <h3 className="line-clamp-3 py-1">{product.title}</h3>

        <h3 className="">{formatINR(product.price)}</h3>

        <CartUpdater cart={cart} setCart={setCart} prodId={product.id} />
      </div>

      <h2 className="w-1/6 px-2 text-center font-bold">{formatINR(total)}</h2>
    </div>
  );
}
