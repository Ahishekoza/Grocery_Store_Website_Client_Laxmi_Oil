"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrum = () => {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/").filter((segments) => segments);
  console.log(pathnameSegments[0]);
  return (
    <div className=" px-10 md:px-20 py-2">
      <ul className="flex space-x-2">
        <li>
          {pathnameSegments[0] === undefined ? "" : <Link href={"/"}>Home</Link>}
        </li>
        {pathnameSegments.map((segments, index) => {
          const href = `/${pathnameSegments.slice(0, index + 1).join("/")}`;

          const label = segments.charAt(0).toUpperCase() + segments.slice(1);

          const isLast = index === pathnameSegments.length - 1;

          return (
            <li key={href} className="flex items-center space-x-2">
              <span>/</span>
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
