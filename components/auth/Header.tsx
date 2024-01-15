import { Lexend_Deca } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lexend_Deca({
  subsets: ["latin"],
  weight: ["700"],
});

interface HeaderProps {
  headerLabel: string;
}

const Header = ({ headerLabel }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>✦ Auth</h1>
      <p className="text-muted-foreground text-sm">{headerLabel}</p>
    </div>
  );
};

export default Header;
