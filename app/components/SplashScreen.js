"use client";

import React, { useEffect, useState } from "react";
import anime from "animejs";

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    });

    loader.add({
      targets: "#playlist",
      delay: 0,
      scale: 1,
      duration: 5700,
      easing: "easeInOutExpo",
    });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <main
      id={"playlist"}
      className={`flex h-screen items-center justify-center z-20  bg-cover bg-no-repeat bg-center`}
      isMounted={isMounted}
    >
      <div className="text-5xl sm:text-8xl font-bold">PlanetZero</div>
    </main>
  );
};

export default SplashScreen;
