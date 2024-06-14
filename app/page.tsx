'use client'
import { useState } from "react"

import Ouckah from "./components/yash";
import AidanOuckama from "./components/yashbardhan";

import Divider from "./components/divider";

export default function Home() {

  const [yashb, setyashb] = useState(true);
  const selected = `text-${yashb ? "white" : "black"} text-xl font-bold select-none md:text-5xl`
  const unselected = selected + " opacity-50";

  const [primary, secondary] = getColorStyle();

  return (
    <div className="whitespace-nowrap overflow-auto no-scrollbar">
      <main className={`flex h-screen flex-col items-center justify-between ${yashb ? (primary) : (secondary)} p-24`}>
        <div className="flex flex-row justify-center items-center w-full h-screen gap-5">
          <h1 
            className={`text-${yashb ? "white" : "black"} text-xl font-bold uppercase select-none
                        md:text-5xl`}
          >
            i am
          </h1>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-black text-xl select-none md:text-5xl">{yashb ? (".") : ("")}</h1>

            <button 
              className={yashb ? (selected) : (unselected)}
              onClick={() => setyashb(true)}
            >
              yash 
            </button>

            <button 
              className={yashb ? (unselected) : (selected)}
              onClick={() => setyashb(false)}
            >
              YASH BARDHAN
              
            </button>

            <h1 className="text-gray-100 text-xl select-none md:text-5xl">{yashb ? ("") : (".")}</h1>
          </div>
        </div>
      </main>
      
      <Divider primaryMode={yashb} />

      {
        yashb ? (
          <Ouckah />
        ) : (
          <AidanOuckama />
        )
      }

    </div>
  )
}

/**
 * get the tailwind css color for a given status.
 *
 * NOTE: doing this to ensure tailwind knows at build time css classes.
 *
 * @returns tailwind css for background color
 */
function getColorStyle() {
  return ["bg-black", "bg-gray-100"];
}
