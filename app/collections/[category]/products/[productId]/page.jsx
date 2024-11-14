/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MinusCircle,
  NotebookPen,
  PlusCircle,
  Vegan,
  WashingMachine,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductDisplayCard from "@/app/components/display-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const bestSeller = [
  {
    sellerImage: "/rice_dal/AmbikaBasmati5kg.avif",
    dry: false,
    vegan: true,
    name: "(Haldiram)GulabJam 1Kg",
    price: 800,
    href: "/collections/products/gulabjam",
  },
  {
    sellerImage: "/rice_dal/kabulichane.avif",
    dry: true,
    vegan: true,
    name: "(Haldiram)BhelPuri 1Kg",
    price: 600,
    href: "/collections/products/bhelpuri",
  },
  {
    sellerImage: "/rice_dal/MasoorDal.avif",
    dry: true,
    vegan: true,
    name: "(GITS)Veg Biryani 265g",
    price: 350,
    href: "/collections/products/gits_biryani",
  },
  {
    sellerImage: "/rice_dal/rozanBasmatic.avif",
    dry: false,
    vegan: true,
    name: "Diya(Indian Lamp) Set",
    price: 1350,
    href: "/collections/products/diyaset",
  },
];

const ProductInfo = ({ params: { productId } }) => {
  // ---productId
  // ---Fetch the product info on the basis of the productId and related products (limit 4 )
  // ---and then change the content dynamically

  return (
    <div className="my-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* ---Image  @TODO:--Improve image pixel*/}
        <div className="bg-red-200 lg:sticky lg:top-10 lg:h-[500px]">
          <Image
            src={"/bannerImages/Ambika_Tea.webp"}
            height={500}
            width={500}
            quality={100}
            objectFit="contain"
            alt="ProductImage"
            className="h-full w-full"
          />
        </div>

        {/* ---Content */}
        <div className="h-full ">
          <div className="flex flex-col">
            <h2 className="font-bold text-3xl md:text-4xl flex flex-wrap mb-6 md:mb-8">
              (GITS) Veg Biryani 1kg
            </h2>
            <div className="flex items-center gap-2 mb-8">
              <WashingMachine size={30} />
              <Vegan size={30} />
            </div>

            <div className="flex flex-col mb-10 ">
              <span className="text-sm font-medium">SKU:30367</span>
              <span className="text-sm font-medium">ISBN:1112506354</span>
            </div>

            <span className="text-2xl font-medium mb-5">500 without tax</span>

            <span className="text-4xl font-bold">565 with tax</span>
            <Separator className="my-3 border border-neutral-500" />
            <div className="flex items-center gap-2 p-2">
              <PlusCircle size={56} color="#737373" />
              <span className="mx-2 text-lg font-semibold">1</span>
              <MinusCircle size={56} color="#737373" />
              <Button className="rounded-full w-full text-2xl h-14">
                Add to cart
              </Button>
            </div>
            <Separator className="my-3 border border-neutral-500" />
            <p className="font-semibold text-lg mb-5">
              1) The crowning glory of India's rice dishes is the Biryani, an
              elaborate Mughal dish made from spiced saffron rice cooked with
              vegetables and finely garnished with fresh peas and potatoes. 2)
              Just immerse unopened pouch in boiling water for 3-5 mins or empty
              contents in a bowl for 1-2 mins and Gits Veg Biryani is ready. 3)
              No need to add anymore ingredients, no further cooking required.
              4) A layered rich dish, it is a one dish meal that is both
              nutritious and full of flavours. 5) Every ingredient goes through
              the most stringent quality checks ensuring we use only the best.
              6) The Gits Guarantee – No Preservatives, No added colours or
              flavors. Everything used in the Gits Products are all natural. 7)
              All Gits Products are 100% Vegetarian. biriyani
            </p>

            <div className="flex flex-col gap-5">
              <Button
                variant="destructive"
                className="w-20 bg-red-500 text-lg font-semibold"
              >
                注意
              </Button>
              <span className="text-xl font-medium mb-5">
                Please note that the packaging box may be warped or dented.
              </span>
            </div>

            <div className="">
              <Accordion type="single" collapsible className="border-b-none">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="border border-neutral-600 hover:no-underline px-5 text-xl rounded-md bg-slate-200">
                    <div className="flex items-center gap-2">
                      <NotebookPen size={25} />
                      <span>Product Information</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className=" border-t-transparent border p-5 rounded-md">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* ---Similar Liked Content */}
      <div className="flex flex-col gap-5 ">
        <span className="text-xl font-bold">You may like this</span>

        {/* --Mobile Nav Carousel */}
        <Carousel className="block md:hidden">
          <CarouselContent>
            {bestSeller.map((product, index) => {
              return (
                <CarouselItem key={index} className=" basis-1/2">
                  <div>
                    <ProductDisplayCard product={product} likeThis={true} />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="absolute  -bottom-8   right-[20%]">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        {/* Web Nav Like This */}
        <div className="hidden md:grid  md:grid-cols-4 gap-4">
          {bestSeller.map((product, index) => {
            return <ProductDisplayCard key={index} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
