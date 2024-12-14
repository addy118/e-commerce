import CartProduct from "./CartProduct";

export default function DisplayCartProducts({ cart, setCart }) {
  return (
    <div className="flex flex-col items-start gap-7">
      {Array.from({ length: cart.length }, (cartProd, i) => {
        return (
          <CartProduct
            cart={cart}
            setCart={setCart}
            prodId={cart[i].id}
            key={i}
          />
        );
      })}
    </div>
  );
}
