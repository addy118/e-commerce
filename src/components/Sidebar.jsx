import { Link } from "react-router-dom";

export default function Sidebar() {
  const catStyles = "my-2";
  return (
    <div className="flex-1 px-8 py-5 pr-10">
      <ul>
        <li className={catStyles}>
          <Link to="/products">All</Link>
        </li>
        <li className={catStyles}>
          <Link to="/products/tv">Televisions</Link>
        </li>
        <li className={catStyles}>
          <Link to="/products/laptop">Laptops</Link>
        </li>
        <li className={catStyles}>
          <Link to="/products/mobile">Mobile</Link>
        </li>
        <li className={catStyles}>
          <Link to="/products/gaming">Gaming</Link>
        </li>
        <li className={catStyles}>
          <Link to="/products/audio">Audio</Link>
        </li>
        <li className={catStyles}>
          <Link to="/products/appliances">Appliances</Link>
        </li>
      </ul>
    </div>
  );
}
