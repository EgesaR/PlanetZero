"use client";
import React from "react";
import Link from "next/link";

//Components
import BottomTextInput from "../../components/TextInput";
import Image from "next/image";
import { Button, Checkbox, Label } from "flowbite-react";

const SignIn = () => {
  return (
    <div className="w-full p-3 h-full">
      <div className="bg-slate-200 h-full flex-1 rounded-xl flex flex-row">
        <div className="flex-1 h-full">
          <div className="flex flex-col items-center justify-center h-[90%]">
            <h1 className="text-4xl font-bold w-[80%]">
              Hi there,
              <br />
              Welcome Back
            </h1>
            <label className="text-slate-800 text-md mt-3  w-[80%]">
              Hello, please sign in to your account
            </label>

            <form className="w-[80%] mt-5">
              <div className="mb-6">
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
                <div className="flex items-center">
                  <Checkbox />
                  <label className="ml-2 text-slate-800">Remember me</label>

                  <a href="#" className="text-slate-800 text-sm ml-auto">
                    Forgot password?
                  </a>
                </div>
              </div>
              <Button className="w-full mt-5">Sign in</Button>
            </form>
          </div>
          <div className="w-full h-[10%] flex items-start pl-10">
            <Label className="ml-3 me-2">Have no account?</Label>
            <Link href={""}>Sign Up</Link>
          </div>
        </div>
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
  );
};

export default SignIn;
