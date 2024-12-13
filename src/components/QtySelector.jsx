import { useState } from "react";

export default function QtySelector({ initialQty }) {
  const buttonStyles =
    "bg-[#555555] px-2 py-0 rounded-md border w-1/4 text-center";

  const [qty, setQty] = useState(initialQty);

  return (
    <div className="my-2 flex">
      <div>
        <button
          className={buttonStyles}
          onClick={() => {
            if (qty !== 0) setQty((qty) => qty - 1);
          }}
        >
          -
        </button>
        <input
          className="w-1/2 rounded-md bg-[#444444] text-center outline-none"
          type="text"
          name="qty"
          id="qty"
          value={qty}
          onChange={(e) => {
            if (!parseInt(e.target.value)) {
              setQty(0);
              return;
            }
            setQty(parseInt(e.target.value));
          }}
        />
        <button
          className={buttonStyles}
          onClick={() => setQty((qty) => qty + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
