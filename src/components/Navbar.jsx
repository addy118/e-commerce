import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 p-4 px-10">
        <h1 className="cursor-pointer text-4xl font-extrabold">SnapCart</h1>
        <ul className="flex gap-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">
            <ShoppingCart />
          </li>
        </ul>
      </div>
      <hr className="mx-6 border-gray-500" />
    </>
  );
}
