"use client"

import React, { useState } from "react";
import Card from "./card.jsx";
import BlogPage from "./BlogPage.js"

const CardListLayout = () => {
  const [showModal, setShowModal] = useState(false)

    const toggleBlogPageModal = () => {
        setShowModal(true)
    } 
    return(
        <div className="flex flex-col w-full items-center overflow-y-auto">
        <BlogPage showModal={showModal} setShowModal={setShowModal} />
        {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item, index) => (
                <Card key={index} item={item} index={index} click={() => toggleBlogPageModal()} />
            ))
        }
      </div>
    )
}

export default CardListLayout
