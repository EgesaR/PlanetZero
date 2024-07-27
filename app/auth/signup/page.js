"use client";
import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation"
import {axios} from "axios"

//Components
import BottomTextInput from "../../components/TextInput";
import Image from "next/image";
import { Button, Checkbox, Label } from "flowbite-react";

const SignUp = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		username: ""
	})

	const onSignUp = async () => {
		
	}
	
	return (
		<div className="w-full p-3 h-full">
			<div className="bg-slate-200 h-full flex-1 rounded-xl flex flex-row">
				<div className="flex-1 h-full">
					<div className="w-full h-[5%] flex items-center pl-10 pt-4 mt-4">
						<Label className="ml-3 me-2">Already have an account?</Label>
						<Link href={"/auth/signin"}>Sign In</Link>
					</div>
					<div className="flex flex-col items-center justify-center h-[95%]">
						<h1 className="text-3xl font-bold w-[80%]">
							Help us to defend our planet <b>Earth</b>
						</h1>
						<label className="text-slate-800 text-base mt-3  w-[80%]">
							Create articles that bring favouritism and conciousness to the
							saving of our planet. With the help of our community, we can make
							a difference.
						</label>

						<form className="w-[80%] mt-5">
							<div className="mb-6">
								<BottomTextInput
									name={"username"}
									placeholder={"Username"}
									type={"text"}
									value={user.username}
									setProp={setUser}
								/>
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
							</div>
							<Button onClick={onSignUp} className="w-full mt-5">Sign up</Button>
						</form>
						<div className="flex items-center">OR</div>
						<div className="flex w-[80%] justify-between items-center">
							<Button className="w-50% mt-5">G</Button>
							<Button className="w-50% mt-5">M</Button>
							<Button className="w-50% mt-5">A</Button>
						</div>
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

export default SignUp;
