import CartProduct from "./CartProduct";

export default function DisplayCartProducts() {
  const cart = [1, 24, 18];

  return (
    <div className="flex flex-col gap-7">
      {Array.from({ length: cart.length }, (cartProd, i) => {
        return <CartProduct prodId={cart[i]} key={i} />;
      })}
    </div>
  );
}
