import React from "react"
import Link from "next/link"

const SignUp = () => {


	return (<div className="flex min-h-screen flex-row p-24">
		<div className="p-12 w-[50%] flex flex-col justify-center">
			<h1 className="text-4xl font-semibold my-6 text-white">
			Hello there welcome to PlanetZero
			</h1>
			<p className="text-slate-600 text-xl mt-[2.5rem]">
			Create posts that change the world's climate change because it starts with you
			</p>
			<div className="mt-10 flex flex-col items-center items-center w-full">
				<button className="bg-red-400 text-white text-bold h-10 w-[80%] my-4 rounded-md hover:bg-red-600 ">
				Countinue with Google
				</button>
				
			</div>
		</div>
		<div className="p-12 w-[50%] flex flex-col justify-center">
			<h1 className="text-4xl font-semibold my-6 text-center text-white">
				SignUp
			</h1>
			<form className="mt-8 w-full">
				<input type="text" placeholder="UserName"
				 name="username" className="pl-3 w-full h-10 rounded-md border border-1 mb-6" />
				 <input type="email" placeholder="Email"
				 name="email" className="pl-3 w-full h-10 rounded-md border border-1 mb-6" />
				 <input type="password" placeholder="Password"
				 name="paasword" className="pl-3 w-full h-10 rounded-md border border-1 mb-6" />
				 <input type="password" placeholder="Verify Password"
				 name="verifyPassword" className="pl-3 w-full h-10 rounded-md border border-1 mb-6" />
				 <textarea type="text" placeholder="Tell us about you and your goal"
				 name="description" className="p-3 w-full h-40 rounded-md border border-1 mb-6" />
				 <button className="w-full uppercase h-10 rounded-md bg-purple-500 hover:bg-purple-700 text-white font-semibold">Sign Up</button>
			</form>
			<div className="mt-6 flex flex-row items-center justify-center">
				<label className="text-white">Have an account?</label>
				<Link href="/auth/signin" 
				className="bg-purple-500 w-[30%] h-10 hover:bg-purple-5700 text-white rounded-md font-semibold ml-6 flex items-center justify-center">
				Sign In
				</Link>
			</div>
		</div>
	</div>)
}

export default SignUp