import CartProduct from "./CartProduct";

export default function DisplayCartProducts() {
  const cart = [1, 24, 18];

  return (
    <div>
      {Array.from({ length: cart.length }, (cartProd, i) => {
        return <CartProduct prodId={cart[i]} key={i} />;
      })}
    </div>
  );
}
