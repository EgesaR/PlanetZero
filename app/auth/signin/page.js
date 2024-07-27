"use client";
import React from "react";
import Link from "next/link";

//Components
import BottomTextInput from "../../components/TextInput";
import Image from "next/image";
import { Button, Checkbox, Label } from "flowbite-react";

const SignIn = () => {
  return (
    <div className="bg-black text-white w-full h-full flex">
      <div className="h-full flex flex-col flex-1 justify-center">
        <div className="px-24">
          <div className="text-center flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Hi there!</h1>
            <h3 className="text-xl font-semibold">
              Welcome to PlanetZero. An Awarness Pollution Blog Website
            </h3>
          </div>
          <Button outline gradientDuoTone="pinkToOrange" className="w-full mt-5">
            Login with Google
          </Button>
          <div className="mx-auto flex">
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
              <div className="h-1 my-4 md:my-7">or</div>
              <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          </div>
          <div className="flex items-center justify-center w-full"></div>
          <form className="w-full flex-col -mt-2">
            <BottomTextInput
              name={"email"}
              placeholder={"Email"}
              type={"email"}
            />
            <BottomTextInput
              name={"password"}
              placeholder={"Password"}
              type={"password"}
            />
            <div className="w-full flex items-center">
              <Link href="/forgotpassword" className="ml-auto">
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
            <p>Don't have an account?{" "}</p>
            <Link href="/auth/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/siginimage.jpg"
          width={200}
          height={200}
          className="w-full h-full"
          alt="Picture of the author"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default SignIn;
