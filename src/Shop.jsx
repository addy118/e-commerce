import DisplayProducts from "./components/DisplayProducts";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { allProducts } from "./urls";

export default function Shop() {
  return (
    <>
      <Navbar />
      <div>
        <DisplayProducts url={allProducts} />
      </div>
    </>
  );
}
