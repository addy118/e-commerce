import inr from "../utils/usd2inr";
import useProduct from "../utils/useProduct";
import QtySelector from "./QtySelector";

export default function Product({ url, prodId }) {
  const { productData, error, loading } = useProduct(url);
  const { products } = productData;

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
        src={products[prodId].image}
        alt="headphones"
        className="rounded-md border bg-[#333333]"
      />

      <h3 className="my-2 line-clamp-2 break-words">
        {products[prodId].title}
      </h3>

      <h2 className="font-extrabold">{inr(products[prodId].price)}</h2>

      <QtySelector />

      <button className="w-full">Add to Cart</button>
    </div>
  );
}
