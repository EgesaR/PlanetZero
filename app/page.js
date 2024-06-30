import Image from "next/image";
//import popScreen from "./components/popupScreen.js"
import CardListLayout from "./components/CardListLayout.js";
import Chip from "./components/Chip.js";
import { Button, Checkbox, Label, Modal, ModalBody } from "flowbite-react";

export default function Home() {
const scroll = false
  return (
    <main
      className={`justify-between pt-8 px-3 bg-slate-900 h-full ${
        scroll ? "overflow-y-scroll" : "overflow-y-hidden"
      }`}
    >
      <div className="flex w-[99.5%] items-center px-3 overflow-x-scroll pb-4">
        {[1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].map((item, index) => (
          <Chip icon={`${index}`} title={`${item}`} key={index} />
        ))}
      </div>
      <CardListLayout />
      
    </main>
  );
}
