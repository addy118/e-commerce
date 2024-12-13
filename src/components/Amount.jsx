import { formatINR } from "../utils/currency";

export default function Amount({ label, amt, total = false }) {
  return (
    <div className={`my-2 flex justify-between ${total ? "text-xl" : ""}`}>
      <div className="font-bold">{label}: </div>
      <div>{formatINR(amt)}</div>
    </div>
  );
}
