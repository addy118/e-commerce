import { CircleX } from "lucide-react";
import deleteIcon from "../assets/delete.svg";
import { formatINR } from "../utils/currency";
import QtySelector from "./QtySelector";

export default function CartProduct() {
  const product = {
    id: 3,
    title:
      "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech%20heaphone.jpg",
    price: 384,
    description:
      "Total freedom with up to 20 m wireless range and LIGHTSPEED wireless audio transmission. Keep playing for up to 29 hours of battery life. 1 Play in stereo on PlayStation(R) 4.\r\nPersonalize your headset lighting across the full spectrum, 16. 8M colors. Play in colors with front-facing, dual-zone LIGHTSYNC RGB lighting and choose from preset animations or create your own with G HUB software.\r\nColorful, reversible suspension headbands are designed for comfort during long play sessions.\r\nAdvanced mic filters that make your voice sound richer, cleaner, and more professional. Customize with G HUB and find your sound.\r\nHear every audio cue with breathtaking clarity and get immerse in your game. PRO-G drivers are designed to significantly reduce distortion and reproduce precise, consistent, rich sound quality.\r\nSoft dual-layer memory foam that conforms to your head and reduces stress points for long-lasting comfort.\r\nG733 weighs only 278 g for long-lasting comfort.",
    category: "gaming",
  };

  const total = product.price * 3;

  return (
    <div className="flex items-center justify-center gap-4">
      <img
        src={product.image}
        alt="Product Image"
        width={150}
        height={100}
        className="border"
      />

      <div className="flex h-full flex-col justify-between px-4">
        <h3 className="line-clamp-3 py-1">{product.title}</h3>

        <h3 className="">{formatINR(product.price)}</h3>

        <div className="flex items-center justify-center gap-3">
          <QtySelector initialQty={3} />
          <div className="cursor-pointer">
            <img src={deleteIcon} alt="Delete" />
          </div>
        </div>
      </div>
      <h2 className="px-2">{formatINR(total)}</h2>
    </div>
  );
}
