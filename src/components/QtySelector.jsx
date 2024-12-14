import { CloudLightning } from "lucide-react";
import { useState } from "react";

export default function QtySelector({
  products = [],
  id = 0,
  setCart,
  initialQty,
}) {
  const buttonStyles =
    "bg-[#555555] px-2 py-0 rounded-md border w-1/4 text-center";

  const [qty, setQty] = useState(initialQty);

  const handleAddToCart = (id) => {
    // get the selected product as object
    // by default filter() returns an array, so [0] in the end
    const product = products.filter((product) => id === product.id)[0];
    // console.log(product.title);
    setCart((cart) => {
      const existingProduct = cart.find(
        (cartProduct) => cartProduct.id === product.id
      );

      // selected product already exists in the cart
      if (existingProduct) {
        return cart.map((cartProduct) =>
          cartProduct.id === product.id
            ? { ...cartProduct, quantity: cartProduct.quantity + qty }
            : cartProduct
        );
      }
      // add new product to the cart
      else {
        return [...cart, { ...product, quantity: qty }];
      }
    });

    // console.log("added");
  };

  return (
    <div className="my-2 flex flex-col gap-3">
      <div>
        <button
          className={buttonStyles}
          onClick={() => {
            if (qty !== 0) setQty((qty) => qty - 1);
          }}
        >
          -
        </button>
        <input
          className="w-1/2 rounded-md bg-[#444444] text-center outline-none"
          type="text"
          name="qty"
          id="qty"
          value={qty}
          onChange={(e) => {
            if (!parseInt(e.target.value)) {
              setQty(0);
              return;
            }
            setQty(parseInt(e.target.value));
          }}
        />
        <button
          className={buttonStyles}
          onClick={() => setQty((qty) => qty + 1)}
        >
          +
        </button>
      </div>
      <button className="w-full" onClick={() => handleAddToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
}
