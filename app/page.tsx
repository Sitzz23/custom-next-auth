import { Button } from "@/components/ui/button";
import Image from "next/image";
import bg from "@/app/bg.jpeg";
import { cn } from "@/lib/utils";
import { Lexend_Deca, Manrope } from "next/font/google";
import { LoginButton } from "@/components/auth/LoginButton";

const font = Lexend_Deca({
  subsets: ["latin"],
  weight: ["700"],
});
const body = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center relative ">
      <div className="absolute inset-0">
        <Image src={bg} alt="background image" />
      </div>
      <div className="space-y-6 text-center relative z-10">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          ✦ Auth
        </h1>
        <p className={cn("text-white text-xl tracking-wide", body.className)}>
          A simple authentication service
        </p>

        <Button variant="secondary" size="lg">
          <LoginButton>Sign In</LoginButton>
        </Button>
      </div>
    </main>
  );
}
