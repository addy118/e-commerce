import { formatINR } from "../utils/currency";

export default function Amount({ qty = false, label, amt, total = false }) {
  return (
    <div className={`my-2 flex justify-between ${total ? "text-xl" : ""}`}>
      <div className="font-bold">
        {label}
        {qty ? ` (${qty})` : ""}
      </div>
      <div className={`${total ? "font-bold text-green-500" : ""}`}>
        {formatINR(amt)}
      </div>
    </div>
  );
}
