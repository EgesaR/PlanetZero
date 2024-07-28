"use client";
import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation"
import {axios} from "axios"

//Components
import BottomTextInput from "../../components/TextInput";
import Image from "next/image";
import { Button, Carousel, Checkbox, Label } from "flowbite-react";


const CarouselItem = ({ image, title, description, titleStyle }) => (
	<div className={`flex h-full items-center justify-center ${!image ? "bg-gray-400 dark:bg-gray-700" : ""} dark:text-white`}>
		<img
			src={image}
			alt={!image ? "image for anything" : image}
		/>
		<div className={`absolute bottom-[16%] sm:bottom-[15%] ${titleStyle}`}>{title}</div>
	</div>
);


const SignUp = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		firstname: "",
		lastname:""
	})

	const onSignUp = async () => {
		const {data} = await axios.post("/api/auth/signup", user)
		console.log(data)
	}
	
	return (
		<div className="bg-black h-full w-full px-2 py-3 gap-3 overflow-y-scroll flex flex-col-reverse text-white sm:flex-row sm:overflow-hidden sm:px-4">
			<div className="flex-1 px-3 flex flex-col mt-3 justify-center pb-8 sm:pb-0 sm:px-8 sm:mt-0">
				<h1 className="text-3xl font-bold mb-5 sm:text-5xl">Create an account</h1>
				<div className="flex mb-6">
					<h3>Already have an account</h3>
					<Link href={"/auth/signin"} className="ml-2 text-cyan-600">Login</Link>
				</div>
				<form>
					<div className="flex flex-row gap-3">
						<BottomTextInput
							name={"firstname"}
							placeholder={"First name"}
							type={"text"}
							value={user.firstname}
							setProp={setUser}
						/>
						<BottomTextInput
							name={"lastname"}
							placeholder={"Last name"}
							type={"text"}
							value={user.lastname}
							setProp={setUser}
						/>
					</div>
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
					<div className="flex items-center gap-2 mb-5">
						<Checkbox id="accept" defaultChecked />
						<Label htmlFor="accept" className="flex text-white">
							I agree with the&nbsp;
							<a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
								terms and conditions
							</a>
						</Label>
					</div>
					<div className="flex items-center justify-center mt-10">
						<Button outline gradientDuoTone="purpleToBlue" className="w-[50%]">
							Create account
						</Button>
					</div>
				</form>
				<div className="mx-auto flex my-3 w-full">
					<hr class="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 grow" />
					<div className="h-1 my-1 md:my-7 mx-6 text-base">Or register with </div>
					<hr class="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 grow" />
				</div>
				<div className="flex w-full items-center gap-4">
					<Button outline gradientDuoTone="purpleToBlue" className="w-full">
						Google
					</Button>
					<Button outline gradientDuoTone="purpleToBlue" className="w-full">
						Apple
					</Button>
				</div>
			</div>
			<div className="h-56 sm:h-[100%] px-3 sm:flex-1">
				<Carousel slideInterval={7000}>
					<CarouselItem title={"The greatest threat to our planet is the belief that someone else will save it. — Robert Swan"} titleStyle={"pl-5 pr-1"} image={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}/>
					<CarouselItem title={"There is no planet B.  — Emmanuel Macron"} titleStyle={"pl-5 pr-1"} image={"https://flowbite.com/docs/images/carousel/carousel-2.svg"}/>
					<CarouselItem title={"The Earth is a fine place and worth fighting for. — Ernest Hemingway"} titleStyle={"pl-5 pr-1"} image={"https://flowbite.com/docs/images/carousel/carousel-3.svg"}/>
					<CarouselItem title={"The only way forward, if we are going to improve the quality of the environment, is to get everybody involved. — Richard Rogers"} titleStyle={"pl-2 pr-1 bottom-[13%] text-center"} image={"https://flowbite.com/docs/images/carousel/carousel-4.svg"}/>
					<CarouselItem title={"The Earth is what we all have in common. — Wendell Berry"} titleStyle={"pl-5 pr-1"} image={"https://flowbite.com/docs/images/carousel/carousel-5.svg"}/>
				</Carousel>
			</div>
		</div>
	);
};

export default SignUp;
