"use client";
import React, { useState } from "react";
import Link from "next/link";

//Components
import BottomTextInput from "../../components/TextInput";
import Image from "next/image";
import { Button, Checkbox, Label, Carousel } from "flowbite-react";

const CarouselItem = ({ image, title, description, titleStyle }) => (
  <div className={`flex h-full items-center justify-center ${!image ? "bg-gray-400 dark:bg-gray-700" : ""} dark:text-white`}>
    <img
      src={image}
      alt={!image ? "image for anything" : image}
    />
    <div className={`absolute bottom-[16%] sm:bottom-[15%] ${titleStyle}`}>{title}</div>
  </div>
);

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  return (
    <div className="bg-black text-white w-full h-[100vh] overflow-y-scroll sm:overflow-y-hidden">
      <div className="flex flex-col sm:flex-row-reverse h-[105vh] pt-3 pb-5">
        <div className="h-56 sm:h-full px-3 sm:flex-1">
          <Carousel slide={false}>
            <CarouselItem title={"The greatest threat to our planet is the belief that someone else will save it. — Robert Swan"} titleStyle={"pl-5 pr-1"} image={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}/>
            <CarouselItem title={"There is no planet B.  — Emmanuel Macron"} titleStyle={"pl-5 pr-1"} image={"https://flowbite.com/docs/images/carousel/carousel-2.svg"}/>
            <CarouselItem title={"The Earth is a fine place and worth fighting for. — Ernest Hemingway"} titleStyle={"pl-5 pr-1"} image={"https://flowbite.com/docs/images/carousel/carousel-3.svg"}/>
            <CarouselItem title={"The only way forward, if we are going to improve the quality of the environment, is to get everybody involved. — Richard Rogers"} titleStyle={"pl-2 pr-1 bottom-[13%] text-center"} image={"https://flowbite.com/docs/images/carousel/carousel-4.svg"}/>
            <CarouselItem title={"The Earth is what we all have in common. — Wendell Berry"} titleStyle={"pl-5 pr-1"} image={"https://flowbite.com/docs/images/carousel/carousel-5.svg"}/>
          </Carousel>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center">
          <div className="px-8 sm:px-16 mt-4">
            <div className="text-center flex flex-col gap-2">
              <h1 className="text-5xl font-bold">Hi there!</h1>
              <h3 className="text-lg font-semibold">Welcome to PlanetZero</h3>
            </div>
            <Button
              outline
              gradientDuoTone="pinkToOrange"
              className="w-full mt-6"
            >
              Login with Google
            </Button>
            <div className="mx-auto flex my-3">
              <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
              <div className="h-1 my-1 md:my-7 mx-6 text-base">or</div>
              <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            </div>
            <div className="flex items-center justify-center w-full"></div>
            <form className="w-full flex-col -mt-2">
              <BottomTextInput
                name={"email"}
                placeholder={"Email"}
                type={"email"}
                value={user.email}
                setProp={setUser}
              />
              <BottomTextInput
                name={"password"}
                placeholder={"Password"}
                type={"password"}
                value={user.password}
                setProp={setUser}
              />
              <div className="w-full flex items-center">
                <Link href="/forgotpassword" className="ml-auto text-blue-500">
                  Forgot Password
                </Link>
              </div>
            </form>
            <div className="w-full flex items-center justify-center my-4">
              <Button color="light" className="text-black w-[50%]" pill>
                Login
              </Button>
            </div>
            <div className="flex items-center justify-center mt-5">
              <p>Don't have an account? &nbsp;</p>
              <Link href="/auth/signup" className="text-blue-500">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
