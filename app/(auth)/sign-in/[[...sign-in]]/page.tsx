import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 ">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <div className="font-bold text-3xl text-[#c6e953]">
            <span className="drop-shadow-lg">Welcome Back</span>
          </div>
          <p className="text-base text-[#d1e884]">
            Log in or Create an account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-[#d1e884] hidden lg:flex items-center justify-center">
        <Image src={`/logo.svg`} alt="logo" height={100} width={100} />
      </div>
    </div>
  );
}
