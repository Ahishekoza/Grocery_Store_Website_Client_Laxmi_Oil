import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Breadcrum from "./components/breadcrum";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
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

          <Header />
          <Breadcrum />

          <main>{children}</main>

          {/* footer */}
        </body>
      </ClerkProvider>
    </html>
  );
}
