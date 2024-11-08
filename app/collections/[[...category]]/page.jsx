"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MobileFilterSort from "../components/mobile-filter-sort";
import ProductDisplayCard from "@/app/components/display-card";

const bestSeller = [
  {
    sellerImage: "/bannerImages/GulabJam.webp",
    dry: false,
    vegan: true,
    name: "(Haldiram)GulabJam 1Kg",
    price: 800,
    href: "/collections/products/gulabjam",
  },
  {
    sellerImage: "/bannerImages/BhelPuri.webp",
    dry: true,
    vegan: true,
    name: "(Haldiram)BhelPuri 1Kg",
    price: 600,
    href: "/collections/products/bhelpuri",
  },
  {
    sellerImage: "/bannerImages/best_seller1.webp",
    dry: true,
    vegan: true,
    name: "(GITS)Veg Biryani 265g",
    price: 350,
    href: "/collections/products/gits_biryani",
  },
  {
    sellerImage: "/bannerImages/diyaset_2.webp",
    dry: false,
    vegan: true,
    name: "Diya(Indian Lamp) Set",
    price: 1350,
    href: "/collections/products/diyaset",
  },
  {
    sellerImage: "/bannerImages/Ambika_Tea.webp",
    dry: true,
    vegan: true,
    name: "(GITS)Assam Tea 500g",
    price: 700,
    href: "/collections/products/ambika_tea",
    soldOut: false,
  },
];

const Collections = ({ params }) => {
  const { category } = params;
  const router = useRouter();

  const formattedCategory = category
    ? String(category).includes("-") //-- check whether the category contents the hypen and as per that format the category
      ? String(category)
          .split("-") // Split at hyphens
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
          .join("&") // Join with '&'
      : String(category)
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
    : "All Products";

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{formattedCategory}</h1>
        <MobileFilterSort />
        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 my-10 gap-5">
          {bestSeller.map((seller, index) => {
            return <ProductDisplayCard key={index} product={seller} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
