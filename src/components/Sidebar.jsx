export default function Sidebar() {
  const catStyles = "my-2";
  return (
    <div className="flex-1 px-4 py-5 pr-10">
      <ul>
        <li className={catStyles}>All</li>
        <li className={catStyles}>Televisions</li>
        <li className={catStyles}>Laptops</li>
        <li className={catStyles}>Mobile</li>
        <li className={catStyles}>Gaming</li>
        <li className={catStyles}>Audio</li>
        <li className={catStyles}>Appliances</li>
      </ul>
    </div>
  );
}
