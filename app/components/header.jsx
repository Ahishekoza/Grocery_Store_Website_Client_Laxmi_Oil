"use client";

import React, { useEffect, useState } from "react";

import MobileNav from "./mobile-nav";
import WebNav from "./web-nav";
import MenuNavLink from "./menu-nav-links";
import { usePathname } from "next/navigation";

//  Add href attribute to category object for ease in navigation
const categories = [
  {
    title: "All Categories",
    subCategories: [
      {
        title: "Rice & Dal",
        links: ["Grounded Spice", "Whole Spice", "Mix Spice", "Herbs"],
      },
      {
        title: "Nuts & DryFruits",
        links: ["Nuts", "Dried Fruits", "Other Nuts"],
      },
    ],
  },
  {
    title: "Special Offers",
    subCategories: [
      {
        title: "Rice & Dal",
        links: ["Grounded Spice", "Whole Spice", "Mix Spice", "Herbs"],
      },
      {
        title: "Nuts & DryFruits",
        links: ["Nuts", "Dried Fruits", "Other Nuts"],
      },
    ],
  },
  {
    title: "Spiece",
    subCategories: [
      {
        title: "Rice & Dal",
        links: ["Grounded Spice", "Whole Spice", "Mix Spice", "Herbs"],
      },
      {
        title: "Nuts & DryFruits",
        links: ["Nuts", "Dried Fruits", "Other Nuts"],
      },
    ],
  },
  {
    title: "Fresh Vegetables Fruits & Sweets",
    subCategories: [
      {
        title: "Rice & Dal",
        links: ["Grounded Spice", "Whole Spice", "Mix Spice", "Herbs"],
      },
      {
        title: "Nuts & DryFruits",
        links: ["Nuts", "Dried Fruits", "Other Nuts"],
      },
    ],
  },
];

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("sign-in") || pathname.includes("sign-up")) {
      setShowCategories(true);
    } else {
      setShowCategories(false);
    }
  }, [pathname]); 

  return (
    <div className="w-full bg-slate-100 border-b border-neutral-300">
      <div className=" px-5 sm:px-10 lg:px-20    py-10">
        {/* Mobile Nav */}
        <MobileNav />
        <WebNav />
      </div>
      {showCategories ? <></>: <MenuNavLink categories={categories} />}
    </div>
  );
};

export default Header;
