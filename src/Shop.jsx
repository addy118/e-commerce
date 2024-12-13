import { Outlet } from "react-router-dom";
import DisplayProducts from "./components/DisplayProducts";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { allProducts } from "./urls";

export default function Shop() {
  return (
    <>
      <Navbar />
      <div className="flex gap-4">
        <Sidebar />
        <div class="h-100% my-4 border-l border-gray-500"></div>
        <Outlet />
      </div>
    </>
  );
}
