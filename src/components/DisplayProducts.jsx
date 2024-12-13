import Product from "./Product";

export default function DisplayProducts({ url }) {
  return (
    <div className="mx-10 my-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
      {Array.from({ length: 6 }, (_, i) => {
        return <Product url={url} prodId={i} key={i} />;
      })}
    </div>
  );
}
