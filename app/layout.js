"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Breadcrum from "./components/breadcrum";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import UseLoading from "./components/use-loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [showScroll, setShowScroll] = useState(false);
  const [ShowHeader, setShowHeader] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 600) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("sign-in") || pathname.includes("sign-up")) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <ClerkProvider
      // appearance={{
      //   baseTheme: shadesOfPurple,
      //   variables: {
      //     colorPrimary: "#3b82f6",
      //     colorBackground: "#1a202c",
      //     colorInputBackground: "#2D3748",
      //     colorInputText: "#F3F4F6",
      //   },
      // }}
      >
        <body className={inter.className}>
          {/* header */}

          {ShowHeader ? <Header /> : <></>}
          <Breadcrum />

          <main className="h-full">{children}</main>

          {/* footer */}

          {/* scroll  */}
          <button
            className="fixed bottom-10 right-2 border border-neutral-300 bg-neutral-50 cursor-pointer   p-4 rounded-full shadow-md"
            onClick={scrollToTop}
            style={{ display: showScroll ? "block" : "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
              />
            </svg>
          </button>
        </body>
      </ClerkProvider>
    </html>
  );
}
