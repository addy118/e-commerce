import { useOutletContext } from "react-router-dom";
import DisplayCartProducts from "./components/DisplayCartProducts";
import OrderSummary from "./components/OrderSummary";
import { CartContext } from "./App";
import { useContext } from "react";

export default function Cart() {
  return (
    <div className="flex items-start gap-16 px-20 py-6">
      <div className="w-2/3">
        <h2 className="pb-4 text-2xl font-bold">Your Shopping Cart</h2>
        <DisplayCartProducts />
      </div>
      <OrderSummary />
    </div>
  );
}
