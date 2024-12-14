import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import initialCart from "./initialData";

export default function App() {
  const [cart, setCart] = useState(initialCart);

  return (
    <>
      <Navbar cart={cart} />
      <Outlet context={{ cart, setCart }} />
    </>
  );
}
