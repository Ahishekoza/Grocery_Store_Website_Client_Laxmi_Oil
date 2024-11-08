"use client";

import React from "react";

import MobileNav from "./mobile-nav";
import WebNav from "./web-nav";
import MenuNavLink from "./menu-nav-links";


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
  return (
    <div className="w-full bg-slate-100 border-b border-neutral-300">
      <div className=" px-5 sm:px-10 lg:px-20    py-10">
        {/* Mobile Nav */}
        <MobileNav />
        <WebNav />
      </div>
      <MenuNavLink categories={categories} />
    </div>
  );
};

export default Header;
