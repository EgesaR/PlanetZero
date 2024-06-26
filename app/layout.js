import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.js";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata = {
  title: "PlanetZero",
  description: "To create awarness about our world and pollution at large.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden`}
      >
        <SpeedInsights />
        <Navbar />
        <div className="mt-[60px] h-[calc(100vh-62.5px)] w-100 overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
