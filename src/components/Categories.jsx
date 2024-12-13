import Category from "./Category";

export default function Categories() {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(200px,1fr))] gap-4">
      <Category category={"Televisions"} linkTo="/products/tv" />
      <Category category={"Audio"} linkTo="/products/audio" />
      <Category category={"Laptops"} linkTo="/products/laptop" />
      <Category category={"Mobiles"} linkTo="/products/mobile" />
      <Category category={"Gaming"} linkTo="/products/gaming" />
      <Category category={"Appliances"} linkTo="/products/appliances" />
    </div>
  );
}
