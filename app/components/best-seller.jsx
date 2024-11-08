
import React from "react";
import ProductDisplayCard from "./display-card";

const bestSeller = [
  {
    sellerImage: "/bannerImages/GulabJam.webp",
    dry: false,
    vegan: true,
    name: "(Haldiram)GulabJam 1Kg",
    price: 800,
    href:"/collections/products/gulabjam"
  },
  {
    sellerImage: "/bannerImages/BhelPuri.webp",
    dry: true,
    vegan: true,
    name: "(Haldiram)BhelPuri 1Kg",
    price: 600,
     href:"/collections/products/bhelpuri"
  },
  {
    sellerImage: "/bannerImages/best_seller1.webp",
    dry: true,
    vegan: true,
    name: "(GITS)Veg Biryani 265g",
    price: 350,
    href:"/collections/products/gits_biryani"
  },
  {
    sellerImage: "/bannerImages/diyaset_2.webp",
    dry: false,
    vegan: true,
    name: "Diya(Indian Lamp) Set",
    price: 1350,
    href:"/collections/products/diyaset"
  },
  {
    sellerImage: "/bannerImages/Ambika_Tea.webp",
    dry: true,
    vegan: true,
    name: "(GITS)Assam Tea 500g",
    price: 700,
    href:"/collections/products/ambika_tea",
    soldOut: false
  },
];

const BestSeller = () => {
  return (
    <div>
      <h1 className=" text-center md:text-left font-bold text-neutral-900 text-2x md:text-3xl">
        Best Seller
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {bestSeller.map((seller, index) => {
          return (
           <ProductDisplayCard key={index} product={seller}/>
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
