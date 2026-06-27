export type QA = { q: string; a: string };

export const faqs: QA[] = [
  {
    q: "How many shops can I manage?",
    a: "Starter supports 1 shop. Growth supports up to 3 locations. Enterprise gives you unlimited shops with a unified super-admin panel to control them all.",
  },
  {
    q: "Can I print invoices?",
    a: "Yes. Every invoice generates as a print-ready PDF with your shop name, item details and totals. You can also share it directly over WhatsApp in one tap.",
  },
  {
    q: "Does stock update automatically on sales?",
    a: "Yes — every recorded sale deducts inventory instantly. If any item drops below your set threshold, a low-stock alert fires right away.",
  },
  {
    q: "Can I renew subscriptions from the admin panel?",
    a: "Yes. The Super Admin panel on the Enterprise plan lets you renew, pause or block any shop's subscription, and track revenue across every branch in one view.",
  },
  {
    q: "Does Cell Desk work without internet?",
    a: "Core features like logging sales and adding inventory work offline. Data syncs automatically the moment your connection returns — no manual action needed.",
  },
];
