"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight, MenuIcon } from "lucide-react";
import React, { useState } from "react";
import NestedSheetItem from "./nested-sheet-item";

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
];
const MobileSlider = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [catgeoryOpen, setCatgeoryOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(false);
  };

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <SheetTrigger asChild>
        <MenuIcon className=" cursor-pointer" size={22} />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <SheetHeader className="text-left p-5">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <Separator className="my-2 w-full" />

        <div className="px-5 ">
          {categories.map((category) => (
            <Sheet
              key={category.title}
              open={catgeoryOpen}
              onOpenChange={setCatgeoryOpen}
            >
              <SheetTrigger asChild>
                <div className="flex justify-between items-center cursor-pointer py-2 rounded">
                  <p className="categories">{category.title}</p>
                  <ChevronRight size={18} />
                </div>
              </SheetTrigger>
              <SheetContent side={"left"} className="p-0 bg-white">
                <SheetHeader className="text-left p-5">
                  <SheetTitle>{category?.title}</SheetTitle>
                </SheetHeader>
                <Separator className="mt-2 w-full" />
                <div
                  onClick={() => setCatgeoryOpen(false)}
                  className="back-button"
                >
                  <ChevronLeft size={18} />
                  <p>Back</p>
                </div>
                <Separator className="mb-2 w-full" />

                <div className="">
                  {category.subCategories.map((subCategory) => (
                    <NestedSheetItem
                      key={subCategory.title}
                      title={subCategory?.title}
                      links={subCategory?.links}
                      onCloseAll={handleMenuOpen}
                    />
                  ))}
                </div>
                <Separator className=" w-full" />
              </SheetContent>
            </Sheet>
          ))}
        </div>

        <Separator className="my-2 w-full" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSlider;
