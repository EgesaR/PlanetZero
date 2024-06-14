import {Card, Button } from "flowbite-react";
import Image from "next/image";

const ImageCard = ({ name, role, socials, image }) => {
  return (
    <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
      </div>
      <div className="flex flex-col items-center pb-10">
        <Image
          alt={`Image of ${name}`}
          height="96"
          src={image}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          Sociale medier:
          {
            socials.map((social, index) => (
              <a key={index} href = {social.github}>
                GitHub1
              </a>
            ))
          }
        </div>
      </div>
    </Card>
  );
};

export default ImageCard;
