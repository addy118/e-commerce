import Product from "./Product";

export default function DisplayProducts({ url, prods }) {
  return (
    <div className="flex-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 border-l border-gray-400 px-10 py-8">
      {Array.from({ length: prods }, (_, i) => {
        return <Product url={url} prodId={i} key={i} />;
      })}
    </div>
  );
}
