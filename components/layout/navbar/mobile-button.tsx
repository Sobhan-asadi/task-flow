import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function NavbarMenuButton({
  isOpen,
  onToggle,
}: NavbarMenuButtonProps) {
  return (
    <Button
      onClick={onToggle}
      size="icon"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="md:hidden"
      variant={"ghost"}
    >
      {isOpen ? <X /> : <Menu />}
    </Button>
  );
}
