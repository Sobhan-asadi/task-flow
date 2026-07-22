import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NavbarActions() {
  const t = useTranslations("navbar");
  return (
    <div className="hidden items-center gap-3 md:flex">
      <Link href={"/login"}>
        <Button className={`cursor-pointer`} variant={"ghost"}>
          {t("login")}
        </Button>
      </Link>
      <Link href={"/register"}>
        <Button className={`cursor-pointer`} variant={"default"}>
          {t("getStarted")}
        </Button>
      </Link>
    </div>
  );
}
