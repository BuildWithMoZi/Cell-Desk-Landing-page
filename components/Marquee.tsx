const PRODUCTS = [
  "iPhone 15 Pro",
  "Galaxy S24 Ultra",
  "AirPods Pro",
  "Pixel 8",
  "OnePlus 12",
  "Redmi Note 13",
  "20K Power Bank",
  "65W Fast Charger",
  "Smart Watch",
  "USB-C Cable",
  "Wireless Earbuds",
  "Tempered Glass",
  "Phone Case",
  "Bluetooth Speaker",
];

export default function Marquee() {
  const items = [...PRODUCTS, ...PRODUCTS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((name, i) => (
          <span className="marquee-item" key={i}>
            {name}
            <span className="marquee-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
