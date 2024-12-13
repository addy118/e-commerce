import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 p-4 px-10">
        <h1 className="cursor-pointer text-4xl font-extrabold">
          <NavLink to="/">SnapCart</NavLink>
        </h1>
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/products">Shop</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/cart">
              <ShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
      <hr className="mx-4 border-gray-500" />
    </>
  );
}
