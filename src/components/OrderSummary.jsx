import { useContext } from "react";
import { onlyInr } from "../utils/currency";
import Amount from "./Amount";
import { CartContext } from "../App";

export default function OrderSummary() {
  const { cart } = useContext(CartContext);

  const subTotalPrice = cart.reduce(
    (total, currProd) => total + currProd.quantity * onlyInr(currProd.price),
    0
  );
  const totalQty = cart.length;
  const shippingFee = cart.length !== 0 ? 40 : 0;
  const tax = cart.length !== 0 ? 2 : 0;

  const totalPrice = (
    subTotalPrice +
    shippingFee +
    (subTotalPrice + shippingFee) * (tax / 100)
  ).toFixed(2);

  return (
    <div className="w-1/3 border border-gray-500 p-4 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Order Summary</h2>
      <Amount label="Subtotal" qty={totalQty} amt={subTotalPrice} />
      <Amount label="Shipping Fee" amt={shippingFee} />
      <div className="my-2 flex justify-between">
        <div className="font-bold">Tax:</div>
        <div>{tax}%</div>
      </div>
      <hr className="my-2 border-gray-500" />
      <Amount label="Total" amt={totalPrice} total={true} />
    </div>
  );
}
