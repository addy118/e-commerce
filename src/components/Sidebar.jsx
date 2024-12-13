import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const catStyles = "my-2";
  return (
    <>
      <div className="w-[20%] flex-1 px-8 py-5 pr-10">
        <ul>
          <li className={catStyles}>
            <NavLink to="/products/all">All</NavLink>
          </li>
          <li className={catStyles}>
            <NavLink to="/products/tv">Televisions</NavLink>
          </li>
          <li className={catStyles}>
            <NavLink to="/products/laptop">Laptops</NavLink>
          </li>
          <li className={catStyles}>
            <NavLink to="/products/mobile">Mobile</NavLink>
          </li>
          <li className={catStyles}>
            <NavLink to="/products/gaming">Gaming</NavLink>
          </li>
          <li className={catStyles}>
            <NavLink to="/products/audio">Audio</NavLink>
          </li>
          <li className={catStyles}>
            <NavLink to="/products/appliances">Appliances</NavLink>
          </li>
        </ul>
      </div>
      <div className="h-100% my-4 border-l border-gray-500"></div>
    </>
  );
}
