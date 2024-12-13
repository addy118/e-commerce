export default function Category({ category }) {
  return (
    <button className="flex cursor-pointer items-center justify-center rounded-lg border border-black py-20">
      {category}
    </button>
  );
}
