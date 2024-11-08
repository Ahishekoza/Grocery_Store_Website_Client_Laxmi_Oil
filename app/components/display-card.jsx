import React from "react";
import { Button } from "@/components/ui/button";
import { Vegan, WashingMachine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const ProductDisplayCard = ({ product }) => {
  return (
    <div
      className="flex flex-col gap-1 w-full h-full relative  px-1   py-2"
    >
      <Link
        href={product.href}
        className=" overflow-hidden   flex justify-center items-center lg:p-5 sm:p-3"
      >
        <Image
          src={product.sellerImage}
          width={1000}
          height={1000}
          className="h-full  md:px-2 lg:px-5  w-[100%]  hover:scale-110 transition-all duration-300 ease-in-out  object-cover"
          alt="best_seller"
        />
      </Link>
      <div className="flex flex-col gap-2 md:gap-2 justify-center items-center my-2 h-28 md:h-32 lg:h-24 overflow-hidden ">
        <span className="font-semibold text-lg">{product.price} with tax</span>
        <span className=" text-sm  text-center flex flex-wrap  md:text-lg underline_products font-bold">
          {product.name}
        </span>
        <div className="flex gap-2">
          {product.dry && <WashingMachine size={25} />}
          {product.vegan && <Vegan size={25} />}
        </div>
      </div>
      <Button variant="outline" className=" rounded-full hover:bg-green-700 common_transition hover:text-white" size={"lg"}>
        Add to Cart
      </Button>
      {product.soldOut && (
        <Badge
          size={"sm"}
          variant={"outline"}
          className="bg-gray-600  text-white absolute top-4 right-2"
        >
          Sold Out
        </Badge>
      )}
    </div>
  );
};

export default ProductDisplayCard;
