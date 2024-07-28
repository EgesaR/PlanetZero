"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.js";
import SplashScreen from "./components/SplashScreen.js";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
  const user = null;
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        {user ? (<>
          {isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <SpeedInsights />
              <div className="{mt-[60px]} {h-[calc(100vh-62.5px)]} h-[100vh] w-100 overflow-hidden">
                {children}
              </div>
            </>
          )}
        </>) : (
      <div>
        <Navbar />
        <div className="h-[calc(100vh-62.5px)] mt-[62px] w-full">
          <div className="flex flex-col sm:flex-row h-[100vh] justify-center items-center gap-16 ">
              <div className="px-8">
                <h2 className="text-4xl font-semibold">Participate and save our planet </h2>
                <h4 className="text-2xl text-slate-800">Create blogs that will optimistically change our planet for the better...</h4>
              </div>
              <div>
                <Image
                  src="/siginimage.jpg"
                  alt="Descriptive text for screen readers"
                  width={200}
                  height={200}
                  className="flex-1 h-full"
                  layout="responsive"
                />
              </div>
          </div>
        </div>
      </div>
    )}
      </body>
    </html>
  );
}
