import NavLink from "@/components/shared/NavLink";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { navigationItems } from "./nav-links";

export default function MobileMenu() {
  const t = useTranslations("navbar");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="bg-card absolute top-full left-0 w-full border-b"
      >
        <ul className="flex flex-col gap-4 p-6">
          {navigationItems.map((item) => (
            <li
              className="border-border border-b pb-4 last:border-none last:pb-0"
              key={item.title}
            >
              <NavLink href={item.href}>{t(item.title)}</NavLink>
            </li>
          ))}
        </ul>

        <div className="border-border flex flex-col gap-3 border-t p-6">
          <Link className="w-full" href="/login">
            <Button className="w-full" variant="outline">
              {t("login")}
            </Button>
          </Link>
          <Link href="/register">
            <Button className="w-full">{t("getStarted")}</Button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
