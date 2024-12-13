import Category from "./Category";

export default function Categories() {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(200px,1fr))] gap-4">
      <Category category={"Televisions"} />
      <Category category={"Audio"} />
      <Category category={"Laptops"} />
      <Category category={"Mobiles"} />
      <Category category={"Gaming"} />
      <Category category={"Appliances"} />
    </div>
  );
}
