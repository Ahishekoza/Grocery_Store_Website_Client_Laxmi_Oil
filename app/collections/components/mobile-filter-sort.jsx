import React from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const MobileFilterSort = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full my-5 w-40 hover:bg-black hover:text-white common_transition">
            <Filter size={25} />
            Filters and Sort
          </Button>
        </SheetTrigger>
        <SheetContent className="left-0 right-0 w-full p-0">
          <SheetHeader className={"p-5 mb-3"}>
            <SheetTitle className="text-left">Filter and sort</SheetTitle>
          </SheetHeader>
          <Separator className="w-full" />
          <div className="p-5">
            <div className="flex flex-col">
              <h1 className="font-bold">Filter:</h1>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="no-underline">
                    Product type
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilterSort;
