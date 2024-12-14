import Amount from "./Amount";

export default function OrderSummary({ cart }) {
  const subTotalPrice = cart.reduce(
    (total, currProd) => total + currProd.quantity * currProd.price,
    0
  );
  const totalQty = cart.length;
  const shippingFee = 40;
  const tax = 2;

  const totalPrice = (
    subTotalPrice +
    shippingFee +
    (subTotalPrice + shippingFee) * (tax / 100)
  ).toFixed(2);

  // console.log(subTotalPrice);

  return (
    <div className="w-1/3 border border-gray-500 p-4 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Order Summary</h2>
      <Amount label="Subtotal" qty={totalQty} amt={subTotalPrice} />
      <Amount label="Shipping Fee" amt={shippingFee} />
      <div className="my-2 flex justify-between">
        <div className="font-bold">Tax:</div>
        <div>2%</div>
      </div>
      <hr className="my-2 border-gray-500" />
      <Amount label="Total" amt={totalPrice} total={true} />
    </div>
  );
}
