export default function inr(usd) {
  const usdRate = 84.8;
  const inrPrice = (usd * usdRate).toFixed(2);
  return formatINR(inrPrice);
}

function formatINR(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
}
