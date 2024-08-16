import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-black/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-black/30 transition",
        isActive ? "bg-black/10 text-white" : "bg-transparent"
      )}
      asChild
      size="sm"
      variant={`outline`}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
