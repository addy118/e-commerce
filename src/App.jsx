import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";
import initialCart from "./initialCart";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
});

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Outlet />
    </CartContext.Provider>
  );
}
