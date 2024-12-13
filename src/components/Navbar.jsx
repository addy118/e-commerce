import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-4 border-b-2 border-black p-4 px-10">
      <h1 className="cursor-pointer text-3xl">SnapCart</h1>
      <ul className="flex gap-4">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Shop</li>
        <li className="cursor-pointer">
          <ShoppingCart />
        </li>
      </ul>
    </div>
  );
}
