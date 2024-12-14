import { useContext } from "react";
import CartProduct from "./CartProduct";
import { CartContext } from "../App";

export default function DisplayCartProducts() {
  const { cart } = useContext(CartContext);
  return (
    <div className="flex flex-col items-start gap-7">
      {Array.from({ length: cart.length }, (cartProd, i) => {
        return <CartProduct prodId={cart[i].id} key={i} />;
      })}
    </div>
  );
}
