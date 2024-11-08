"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrum = () => {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/").filter((segments) => segments);
 const pagesFound =  pathnameSegments.find((segment)=>segment ==="pages")
  return (
    <div className="  px-5 sm:px-10 lg:px-20  my-3">
      <ul className={`flex ${pagesFound ? "":"space-x-2"} `}>
        <li>
          {pathnameSegments[0] === undefined ? (
            ""
          ) : (
            <Link href={"/"}>Home</Link>
          )}
        </li>
        <li>{pathnameSegments[1] === "pages" ? "" : ""}</li>
        {pathnameSegments.map((segments, index) => {
          let href;
          let label;
          let isLast;
          if (segments !== "pages") {
             href = `/${pathnameSegments.slice(0, index + 1).join("/")}`;

             label = segments.charAt(0).toUpperCase() + segments.slice(1);

             isLast = index === pathnameSegments.length - 1;
          }
          else{
            href=""
            label=""
          }

          return (
            <li key={href} className="flex items-center space-x-2">
              <span>{segments==="pages" ? "": "/"}</span>
              {isLast ? (
                <span className="text-gray-500">{label}</span>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrum;
