import { useOutletContext } from "react-router-dom";
import Product from "./Product";

export default function DisplayProducts({ url, prods = 20 }) {
  const { cart, setCart } = useOutletContext();

  return (
    <div className="flex-4 grid w-[80%] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 px-10 py-8">
      {Array.from({ length: prods }, (_, i) => {
        return (
          <Product url={url} prodId={i} key={i} cart={cart} setCart={setCart} />
        );
      })}
    </div>
  );
}
