import { Link } from "react-router-dom";

export default function Category({ category, linkTo }) {
  return (
    <Link to={linkTo}>
      <div className="flex cursor-pointer items-center justify-center rounded-lg border border-black border-transparent bg-[#1a1a1a] py-20 transition-colors duration-200 hover:border-[#646cff] focus:outline-none active:bg-[#1a1a1a95]">
        {category}
      </div>
    </Link>
  );
}
