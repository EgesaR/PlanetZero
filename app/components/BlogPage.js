"use client"
import {useState} from "react"
import { Button, Label, Modal, ModalBody, Footer, FooterBrand, FooterComponent, FooterCopyright, FooterDivider,
	FooterIcon, FooterLink, FooterLinkGroup, FooterTitle, } from "flowbite-react";
import BlogPage from "./components/BlogPage.js";

const BlogPage = ({ invisibility }) => {
  const [showModal, setShowModal] = useState(true)
  
  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <Modal show={showModal}>
      <ModalBody>
        <div
          className={`fixed top-0 left-0 w-full h-[100vh] bg-white px-3 pt-4 sm:pt-3 mt-16`}
        >
          <div className="h-9 sm:h-12 w-full flex items-center px-3 border-b border-b-1 mb-6">
            <div className="flex items-center w-full mb-[12px]">
              <img
                src="/ray.jpg"
                alt="ray"
                className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
              />
              <div className="block ml-3">
                <p className="font-semibold sm:text-md">Egesa Raymond</p>
                <p className="text-sm">
                  <span>400 Likes</span>
                  <span className="sm:text-xl font-bold text-slate-600 mx-1">
                    |
                  </span>
                  <span>500 Followers</span>
                </p>
              </div>
              <div className="ml-auto flex justify-between h-[50%] sm:h-full">
                <Button className="w-full p-[o.05rem] mr-3" onClick={() => handleCloseModal()}>Close</Button>
                <Button className="w-full p-[0.05rem]">Follow</Button>
              </div>
            </div>
          </div>
          <div className="h-[80%] w-full overflow-y-scroll pb-12 relative">
            <img
              src="/gitlab.svg"
              alt="Descriptive text for screen readers"
              className="flex-1 w-full"
              style={{ height: "40%" }}
              layout="responsive"
            />
            <div className="mt-10 px-2">
              <h1 className="text-xl sm:text-2xl font-bold">
                Creating a green eco-system satellite pre-absorption of green
                house gases
              </h1>
              <h3 className="text-base font-light mt-3">
                The envolvement of the world on the world of tech and a soon
                eradication of machine to a new era of IoT(Internet of Things)
                which is obvious to anyone so, the more we reach to the extent
                we produce alot and lots of green house gases that are killing
                and kicking in so the precaution have to be thin but no, people
                have resolved to seeing this era to see but forgetting this has
                an impact to our lives, health and interactions.
              </h3>
              <h1 className="text-xl sm:text-2xl font-bold mt-3">
                So what is it?
              </h1>
              <h3 className="text-base font-light mt-3">
                The USA and NASA are working hand with other nations to create a
                satellite that cyber-tomically uses material learning and
                micro-control to absorb these green house gases to improve on
                the world biggest problem, maintainability and sustainability.
              </h3>
              <h1 className="text-xl sm:text-2xl font-bold mt-3">
                How can this help?
              </h1>
              <h3 className="text-base font-light mt-3">
                This can help in a way that generations shall survive ont his kind of technology for future prosperation and bring world and nature balance.
              </h3>  
            </div>
            <Footer className="h-88 px-4 py-5 bg-slate-300 mb-auto absolute left-0 -bottom-[12rem]">
                <div className="flex mr-4">
                    Instagram &nbsp;&nbsp;
                    <FooterLink href="#" className="text-blue-500 font-semibold">Egesa Raymond</FooterLink>
                </div>
                <div className="flex mr-4">
                    Github &nbsp;&nbsp;
                    <FooterLink href="#" className="text-blue-500 font-semibold">EgesaR</FooterLink>
                </div>
                <div className="flex mr-4">
                    LinkedIn &nbsp;&nbsp;
                    <FooterLink href="#" className="text-blue-500 font-semibold">Egesa Raymond</FooterLink>
                </div>
              </Footer>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default BlogPage;
