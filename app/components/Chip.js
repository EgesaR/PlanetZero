"use client"

import { useState } from "react"

const Chip = ({ icon, title, onClose }) => {
    const [focus, setFocus] = useState(false)
    const handleFocus = () => {
        if(focus){
            setFocus(false);
            console.log(focus)
        }else {
            setFocus(true);
            console.log(focus)
        }
    }
    return(
        <button 
        className={`group relative flex items-stretch justify-center p-0.5 text-center font-medium rounded-lg w-full mt-5 mx-2 border border-sky-600 bg-transparent text-white px-3 outline-none ${focus ? "ring-2 ring-cyan-300 dark:focus:ring-cyan-800" : ""} enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow]`} onClick={() => handleFocus()}>
            <span className="mr-2">{icon}</span>
            <span className="font-semibold">{title}</span>
            <span className="ml-2" onClick={() => onClose}>X</span>
        </button>
    )
}

export default Chip
