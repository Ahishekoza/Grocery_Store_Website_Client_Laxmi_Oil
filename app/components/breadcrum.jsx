"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrum = () => {
  const pathname = usePathname();

  // --- check if user is redirecting to login/signup page then don't show breadcrumbs
  const isPresent =
    pathname.includes("sign-in") || pathname.includes("sign-up");
  if (isPresent) {
    return <></>;
  }

  const pathnameSegments = pathname
    .split("/")
    .filter(
      (segment) => segment && segment !== "products" && segment !== "pages"
    );

  return (
    <div className="px-5 sm:px-10 lg:px-20 my-3">
      <ul className="flex space-x-2">
        <li>
          {pathnameSegments[0] === undefined ? (
            ""
          ) : (
            <Link href={"/"}>Home</Link>
          )}
        </li>

        {pathnameSegments.map((segment, index) => {
          const href = `/${pathnameSegments.slice(0, index + 1).join("/")}`;
          const label = segment.charAt(0).toUpperCase() + segment.slice(1);
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
