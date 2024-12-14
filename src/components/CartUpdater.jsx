import deleteIcon from "../assets/delete.svg";

export default function CartUpdater({ prodId, setCart, cart }) {
  const buttonStyles =
    "bg-[#555555] px-2 py-0 rounded-md border w-1/4 text-center";

  const product = cart.find((item) => item.id === prodId);

  const handleIncreaseCart = (id) => {
    const existingProduct = cart.find((cartProd) => cartProd.id === id);

    const newCart = cart.map((cartProd) =>
      cartProd.id === id
        ? { ...cartProd, quantity: existingProduct.quantity + 1 }
        : cartProd
    );
    setCart(newCart);
  };

  const handleDecreaseCart = (id) => {
    const existingProduct = cart.find((cartProd) => cartProd.id === id);
    // if you delete on qty 1 it's gonna be 0
    if (existingProduct.quantity === 1) {
      handleDelete(id);
      return;
    }

    const newCart = cart.map((cartProd) =>
      cartProd.id === id
        ? { ...cartProd, quantity: existingProduct.quantity - 1 }
        : cartProd
    );
    setCart(newCart);
  };

  const handleCart = (e, id) => {
    e.preventDefault();

    // inputted value
    const value = e.target.value;

    // empty qty
    if (value === "") {
      const newCart = cart.map((cartProd) =>
        cartProd.id === id ? { ...cartProd, quantity: "" } : cartProd
      );

      // allow for temporary state
      setCart(newCart);
      return;
    }

    // valid qty
    const newQty = parseInt(value);
    if (!isNaN(newQty) && newQty >= 0) {
      const newCart = cart.map((cartProd) =>
        cartProd.id === id ? { ...cartProd, quantity: newQty } : cartProd
      );
      setCart(newCart);
    }
  };

  const handleBlur = (id) => {
    const product = cart.find((cartProd) => cartProd.id === id);

    if (product && product.quantity === "") {
      handleDelete(id);
    }

    // lost focus from input on "" then show 0
    // const newCart = cart.map((cartProd) =>
    //   cartProd.id === id && cartProd.quantity === ""
    //     ? { ...cartProd, quantity: 0 }
    //     : cartProd
    // );

    // setCart(newCart);
  };

  const handleDelete = (id) => {
    const newCart = cart.filter((cartProd) => cartProd.id !== id);
    setCart(newCart);
  };

  return (
    <div className="flex items-center gap-3 py-2">
      <div className="flex items-center gap-2">
        <button
          className={buttonStyles}
          onClick={() => handleDecreaseCart(prodId)}
        >
          -
        </button>
        <input
          className="w-1/2 rounded-md bg-[#444444] text-center outline-none"
          type="number"
          name="qty"
          id="qty"
          value={product.quantity}
          onChange={(e) => handleCart(e, prodId)}
          onBlur={() => handleBlur(prodId)}
        />
        <button
          className={buttonStyles}
          onClick={() => handleIncreaseCart(prodId)}
        >
          +
        </button>
      </div>

      <img
        className="cursor-pointer"
        onClick={() => handleDelete(prodId)}
        src={deleteIcon}
        alt="Delete"
      />
    </div>
  );
}
