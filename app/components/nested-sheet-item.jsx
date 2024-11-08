"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NestedSheetItem = ({ title, links, onCloseAll }) => {
  const [open, setOpen] = useState(false);
const router = useRouter()

  const handleRedirect =(path)=>{
    onCloseAll()
    router.push(path)
  }

  return (
    <ScrollArea className="h-full">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="flex px-5 justify-between items-center cursor-pointer py-2 rounded">
            <p className="sub-categories">{title}</p>
            <ChevronRight size={18} />
          </div>
        </SheetTrigger>
        <Separator className=" mt-2 w-full" />
        <SheetContent side="left" className="p-0 bg-white">
          <SheetHeader className="text-left p-5">
            <SheetTitle>{title}</SheetTitle>
          </SheetHeader>
          <Separator className="mt-2 w-full" />
          <div onClick={() => setOpen(false)} className="back-button">
            <ChevronLeft size={18} />
            <p>Back</p>
          </div>
          <Separator className="mb-2 w-full" />
          <div>
            {links?.map((link) => (
              <div key={link}>
                <span
                
                  onClick={()=>handleRedirect(`/collections/${link.split(" ").join("").toLowerCase()}`)}
                  className="sub-categories px-5"
                >
                  {link}
                </span>
                <Separator className="my-2 w-full" />
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </ScrollArea>
  );
};

export default NestedSheetItem;
