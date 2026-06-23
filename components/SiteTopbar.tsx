import Link from "next/link";

export default function SiteTopbar() {
  return (
    <header className="subpage-topbar">
      <Link href="/" className="nav-logo" aria-label="Cell Desk home">
        <img
          className="nav-logo-img"
          src="/logo-img.png"
          alt="Cell Desk logo"
          width={36}
          height={36}
        />
        Cell Desk
      </Link>
      <Link href="/" className="btn btn-ghost btn-sm subpage-back">
        ← Back to home
      </Link>
    </header>
  );
}
