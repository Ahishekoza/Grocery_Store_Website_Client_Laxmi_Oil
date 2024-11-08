import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import MobileSlider from "./mobile-slider";
import Image from "next/image";

const MobileNav = () => {
  return (
    <div className="flex flex-col gap-2 lg:hidden">
      <div className="flex justify-between items-center">
        <MobileSlider />

        <Image
          src={"/Ambika_Shop_LOGO.avif"}
          alt="Logo"
          width={50}
          height={50}
          className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
          onClick={() => router.push("/")}
        />

        <div className="relative cursor-pointer">
          <ShoppingCart size={22} />
          <span className="  absolute flex items-center justify-center rounded-full -top-2 -right-2 h-4 w-4 text-xs bg-slate-600 text-white">
            1
          </span>
        </div>
      </div>
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-gray-900" size={22} />

        <input
          type="text"
          placeholder="Search for ..."
          className="pl-10 pr-4 py-2 border rounded-3xl w-full"
        />
      </div>
    </div>
  );
};

export default MobileNav;
