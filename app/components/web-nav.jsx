import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Search, ShoppingCart, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserMenu from "./user-menu";

const WebNav = () => {
  return (
    <div className="lg:flex flex-col gap-3 hidden">
      <div className="flex items-center  gap-20">
        <Link href={"/"}>
          <Image
            src={"/Ambika_Shop_LOGO.avif"}
            height={80}
            width={200}
            className="h-15 w-15 object-contain cursor-pointer "
            // --- Navigation for Home Page--
            onClick={() => console.log("Clicked")}
            alt="LOGO"
          />
        </Link>
        <div className="flex-1 flex flex-row items-center gap-2">
          <div className="relative flex flex-1 items-center">
            <Search className="absolute left-3 text-gray-900" size={22} />

            <input
              type="text"
              placeholder="Search for ..."
              className="pl-10 pr-4 py-2 border rounded-3xl w-full"
            />
          </div>
          <SignedOut href={"/sign-in"}>
            <SignInButton>
              <Button variant="outline" className="rounded-full" size={"lg"}>
                <User2Icon size={22} /> Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
          <Button
            variant="outline"
            className="rounded-full bg-black text-white "
            size={"lg"}
          >
            {" "}
            <ShoppingCart size={22} />
            9,399(3)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WebNav;
