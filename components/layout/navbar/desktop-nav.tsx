import Link from "next/link";
import { navigationItems } from "./nav-links";

export default function DesktopNav() {
  return (
    <ul className="flex gap-6">
      {navigationItems.map((item) => (
        <li key={item.title}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
