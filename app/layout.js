import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Breadcrum from "./components/breadcrum";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New Laxmi Oil And Sugar Depot ",
  description: "One stop for all your grocery needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header */}
        <Header />
        <Breadcrum/>
        <main >{children}</main>

        {/* footer */}
      </body>
    </html>
  );
}
