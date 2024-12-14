import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <Outlet context={{ cart, setCart }} />
    </>
  );
}
