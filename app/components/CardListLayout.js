"use client"

import React, { useState } from "react";
import Card from "./card.jsx";

const CardListLayout = () => {
  const [showModal, setShowModal] = useState(true)
    return(
        <div className="flex flex-col w-full items-center overflow-y-auto">
        <BlogPage />
        {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item, index) => (
                <Card key={index} item={item} index={index} click={() => console.log("Hello World")} />
            ))
        }
      </div>
    )
}

export default CardListLayout
