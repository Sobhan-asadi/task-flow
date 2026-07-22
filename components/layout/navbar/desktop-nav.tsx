import NavLink from "@/components/shared/NavLink";
import { useTranslations } from "next-intl";
import { navigationItems } from "./nav-links";

export default function DesktopNav() {
  const t = useTranslations("navbar");

  return (
    <ul className="hidden gap-6 md:flex">
      {navigationItems.map((item) => (
        <li key={item.title}>
          <NavLink
            href={item.href}
            className="text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            {t(item.title)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
