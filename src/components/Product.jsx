import inr from "../utils/currency";
import useProduct from "../utils/useProduct";
import QtySelector from "./QtySelector";

export default function Product({ url, prodId, setCart }) {
  const { productData, error, loading } = useProduct(url);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center">
        <p className="text-lg text-red-600">Error: {error}</p>
      </div>
    );

  return (
    <div className="w-100 flex cursor-pointer flex-col items-start rounded-md bg-[#333333] p-2">
      <img
        src={productData[prodId].image}
        alt="headphones"
        className="rounded-md border bg-[#333333]"
      />

      <h3 className="my-2 line-clamp-2 break-words">
        {productData[prodId].title}
      </h3>

      <h2 className="font-extrabold">{inr(productData[prodId].price)}</h2>

      <QtySelector
        products={productData}
        id={productData[prodId].id}
        setCart={setCart}
        initialQty={0}
      />
    </div>
  );
}
