import { Outlet, useOutletContext } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function Shop() {
  const { cart, setCart } = useOutletContext();
  return (
    <div className="flex gap-4">
      <Sidebar />
      <Outlet context={{ cart, setCart }} />
    </div>
  );
}
