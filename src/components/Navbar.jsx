import { Link, NavLink } from "react-router-dom";
import cartIcon from "../assets/cart.svg";

export default function Navbar({ cart }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4 p-4 px-10">
        <h1 className="cursor-pointer text-4xl font-extrabold">
          <Link to="/">
            Snap<span className="text-[#646cff]">Cart</span>.
          </Link>
        </h1>
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/products/all">Shop</NavLink>
          </li>
          <li className="cursor-pointer">
            <div className="relative">
              <NavLink to="/cart">
                <img className="relative" src={cartIcon} alt="Cart" />
              </NavLink>
              <span className="absolute right-0 top-0 flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                {cart.length}
              </span>

              {/* {cart.length !== 0 && (
                <span className="absolute right-0 top-0 flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                  {cart.length}
                </span>
              )} */}
            </div>
          </li>
        </ul>
      </div>
      <hr className="mx-4 border-gray-500" />
    </>
  );
}
