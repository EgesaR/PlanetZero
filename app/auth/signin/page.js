"use client";
import React, { useState } from "react";
import Link from "next/link";

//Components
import BottomTextInput from "../../components/TextInput";
import Image from "next/image";
import { Button, Checkbox, Label, Carousel } from "flowbite-react";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  return (
    <div className="bg-black text-white w-full h-[100vh] overflow-y-scroll sm:overflow-y-hidden">
      <div className="flex flex-col sm:flex-row h-[105vh] pt-3 pb-5">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-3">
          <Carousel slide={false}>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center">
          <div className="px-8 sm:px-16 mt-4">
            <div className="text-center flex flex-col gap-2">
              <h1 className="text-5xl font-bold">Hi there!</h1>
              <h3 className="text-lg font-semibold">
                Welcome to PlanetZero
              </h3>
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
              <Link href="/auth/signup" className="text-blue-500">Sign Up</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
