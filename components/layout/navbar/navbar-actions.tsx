import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-3">
      <Link href={"/login"}>
        <Button variant={"ghost"}>Login</Button>
      </Link>
      <Link href={"/register"}>
        <Button variant={"default"}>Get Started</Button>
      </Link>
    </div>
  );
}
