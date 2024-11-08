import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={product.href}>
      {" "}
      <Card className="w-full">
        <CardContent className="px-0">
          <div className="w-full bg-red-300 overflow-hidden">
            <Image
              src={product.productImage}
              height={100}
              width={500}
              className="bg-red-400 h-full hover:scale-110 transition-all duration-300 ease-in-out w-full object-cover"
              alt="ProductImage"
            />
          </div>
        </CardContent>
        <CardFooter className="h-12 flex items-center justify-center"> {/* Fixed height */}
          <p className="text-center font-semibold underline_products cursor-none">
            {product.productName}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
