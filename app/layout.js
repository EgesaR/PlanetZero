"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.js";
import SplashScreen from "./components/SplashScreen.js";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["vietnamese"] });

/*export const metadata = {
  title: "PlanetZero",
  description: "To create awarness about our world and pollution at large.",
};*/

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  /**
 * <main
            className={`h-[100vh] w-full fixed top-0 left-0 overflow-hidden flex flex-row- justify-center items-center bg-white z-20 bg-[url('/PlanetZero.gif')] bg-cover bg-no-repeat bg-center`}
          ></main>
 */
  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <SpeedInsights />
            <Navbar />
            <div className="mt-[60px] h-[calc(100vh-62.5px)] w-100 overflow-hidden">
              {children}
            </div>
          </>
        )}
      </body>
    </html>
  );
}
