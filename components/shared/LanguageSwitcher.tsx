"use client";

import { Languages } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  function changeLanguage(locale: string) {
    router.replace("/", {
      locale,
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "icon",
              }),
            )}
          >
            <Languages className="text-sky-400" />
          </button>
        }
      />

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          English
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => changeLanguage("fa")}>
          فارسی
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
