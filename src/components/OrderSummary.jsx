import Amount from "./Amount";

export default function OrderSummary() {
  return (
    <div className="w-1/3 border border-gray-500 p-4 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Order Summary</h2>
      <Amount label="Subtotal" amt={100} />
      <Amount label="Shipping Fee" amt={0} />
      <hr className="my-2 border-gray-500" />
      <Amount label="Total" amt={100} total={true} />
    </div>
  );
}
