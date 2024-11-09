import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const WebFilterSort = () => {
  return (
    <div className="mt-10 mb-2 hidden md:block">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-semibold text-lg">Filter:</span>
          <div className="flex items-center gap-2 mt-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="rounded-full text-xl p-5">
                  Product Type <ChevronDown size={22} className="ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 h-full rounded-2xl p-0">
                <div className="flex flex-col ">
                  <div className="flex  justify-between items-center p-4">
                    {/* selected items number */}
                    <span>{0} selected</span>
                    <span className="underline_products">Reset</span>
                  </div>
                  <Separator className="mb-2" />
                  <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Beans
                      </label>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="rounded-full text-xl p-5">
                  Price <ChevronDown size={22} className="ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40">
                Place content for the popover here.
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="rounded-full text-xl p-5">
                  Availability <ChevronDown size={22} className="ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40">
                Place content for the popover here.
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-lg">Sort:</span>
          <div className="mt-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="rounded-full text-xl p-5">
                  Product Type <ChevronDown size={22} className="ml-2" />
                </Button>
              </PopoverTrigger>{" "}
              <PopoverContent className="w-40">
                Place content for the popover here.
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebFilterSort;
