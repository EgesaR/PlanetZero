import React from "react";
import ImageCard from "../components/ImageCard.js";
import people from "../data/people.js";

const About = () => {
  return (
    <div className="mt-12 px-10 overflow-x-hidden">
      <h1 className="text-4xl sm:text-5xl font-underline font-semibold text-slate-700 text-center sm:text-left mt-3">
        About us
      </h1>
      <div className="mt-8 flex flex-col justify-center items-center">
        <img
          src=""
          alt="Bronsted img"
          className="h-[10rem] w-[10rem] bg-sky-800 rounded-full"
        />
        <h1 className="mt-4 text-2xl sm:text-3xl text-teal-700">Bronsted Labs</h1>
      </div>
      <div className="mt-6 mb-10 text-medium">
        <article className="mb-5">
          We are the Bronsted Labs, a passionate team of students from Kiira College Butiki
          driven by a shared concern for our environment.
          <br />
          <b>PlanetZero</b> is our project dedicated to empowering citizen scientists in 
          the fight against pollution. 
        </article>
        <article className="mb-5">
          Through informative articles published here, authored by both our team and dedicated
          volunteers with the expertise in various environmental fields, we aim to raise awareness,
          inspire action, and provide practical solutions to tackle this critical global issue.
        </article>
        <article className="mb-5">
          We believe that by working together, we can make a significant difference. Citizen scientists
          of all backgrounds are welcome to contribute thieir knowledge and experiences. Whether you're a
          student, researcher, or simply a concerned citizen, we encourage you to join our community and be 
          part of the solution. 
        </article>
        <h1 className="text-center text-2xl font-semibold">
          Here's what you'll find on PlanetZero:
        </h1>
        <ul className="list-disc">
          <li>
            Hello
          </li>
        </ul>
        <div>
          <i>Because our Planet with Zero pollution. Stay Safe, Save a life</i>
        </div>
      </div>
      <div className="mt-7 text-center flex flex-col items-center">
        <h1 className="text-3xl text-teal-800 font-semibold mb-6">
          <u>Creators</u>
        </h1>
        <div className="w-100 sm:w-[100%] grid grid-rows-5 grid-cols-3 gap-4">
          {
            people.map((person, index) => (
              <ImageCard 
                key={index}
                name={person.name} 
                role={person.role} 
                socials={person.socials}
                image={person.image}
                />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default About;
