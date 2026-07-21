import Log from "@/public/log.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <Image height={80} width={80} src={Log} alt="Log" />
    </Link>
  );
}
