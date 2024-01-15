import Image from "next/image";
import bg from "@/app/bg.jpeg";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative h-screen flex justify-center items-center",
        body.className
      )}
    >
      <div className="absolute inset-0">
        <Image src={bg} alt="background image" fill />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuthLayout;
