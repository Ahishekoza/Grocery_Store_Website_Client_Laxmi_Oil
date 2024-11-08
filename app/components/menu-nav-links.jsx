import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Truck } from "lucide-react";

const MenuNavLink = ({ categories }) => {
  return (
    <div className="hidden lg:block">
      <Separator className={"w-full"} />
      <div className=" px-10 md:px-20 py-3 flex justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent underline_categories">
                All Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="fixed inset-x-0 w-full grid grid-cols-4 gap-4 py-10 px-10 bg-slate-100 shadow-md">
                  {categories.map((category, index) => {
                    return (
                      <div key={index} className="text-left">
                        <Link href={`/collections/${category?.title}`}>
                          <p className="mb-10 underline_categories text-slate-950">
                            {category?.title}
                          </p>
                        </Link>
                        <div className="flex flex-col ">
                          {category?.subCategories.map((subCategory, index) => {
                            return (
                              <div key={index}>
                                <p className="mb-5 underline_categories">
                                  {subCategory?.title}
                                </p>
                                {subCategory?.links.map((link, index) => {
                                  return (
                                    <p
                                      key={index}
                                      className="underline_categories mb-1"
                                    >
                                      {link}
                                    </p>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* --- Company Info Related Navigation  */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:underline transition-all">
                About Laxmi Oil
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className=" p-5 h-[300px]  bg-slate-100">
                  <p>Abhishek</p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>


        <div className="flex justify-between items-center">
          <Link href={"/pages/regarding-delivery"} className="flex gap-2 items-center">
            <Truck size={28} color="#525252"/>
            <span>Delivery Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuNavLink;
