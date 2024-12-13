import DisplayCartProducts from "./components/DisplayCartProducts";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";

export default function Cart() {
  return (
    <>
      <Navbar />
      <div className="flex items-start gap-6 px-10 py-6">
        <div className="flex-2">
          <h2 className="pb-2 text-2xl font-bold">Your Shopping Cart</h2>
          <DisplayCartProducts />
        </div>
        <OrderSummary />
      </div>
    </>
  );
}
