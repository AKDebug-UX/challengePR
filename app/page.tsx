"use client"

import { useState } from "react"
import Header from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />

      {/* CLIENTS */}
      <div className="flex flex-col items-center justify-center p-4">
        <h3 className="text-xl font-bold text-black/40 text-center uppercase">clients</h3>
        <h1 className="text-3xl font-bold text-black text-center">All our clients love our work</h1>
        <div className="flex flex-row justify-between gap-6 px-4 py-12">
          {lists.map((list, index) => (
            <div key={index + 1} className="relative mt-[1rem] w-[5rem] h-[3rem]">
              <Image
                fill
                className="slide-img"
                src={`${index + 1}.png`} alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <section className="bg-background/80 w-full flex flex-col md:flex-row text-left gap-3 py-12 px-4 sm:px-6 md:px-12 xl:px-24">
        <div className="relative mt-[5rem] w-full md:w-[45%] h-[20rem]">
          <Image
            fill
            className="slide-img"
            src="/features.png" alt=""
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[45%] text-left">
          <h3 className="text-xl font-bold text-white/40 uppercase">clients</h3>
          <h1 className="text-4xl font-bold text-white">What you get if you start your business with us</h1>
          <p className="text-lg text-white/40">Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis effic iturut magna. Pellente sque sita met tellus blandit. Etiam nec odio.</p>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row justify-between  grid grid-cols md:grid-cols-2 gap-6">
          {clients.map((list, index) => (
            <div key={index} className="flex flex-col bg-white px-8 py-12 shadow-sm hover:shadow-xl rounded-md gap-6 items-center text-center">
              <div className="relative mt-[1rem] w-[5rem] h-[4rem]">
                <Image
                  fill
                  className="slide-img"
                  src={`${list.img}.png`} alt=""
                />
              </div>
              <div className="text-2xl font-bold text-gray-900">{list.value}</div>
              <div className="text-sm text-gray-600">{list.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

const lists = [
  { value: "No1 in Sales!" },
  { value: "Online Marketing" },
  { value: "Modern Design" },
  // { value: "Online Marketing" },
  // { value: "Modern Design" },
]

const clients = [
  { img: "presentation", value: "No1 in Sales!", label: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul." },
  { img: "trophy", value: "Online Marketing", label: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul." },
  { img: "video-camera", value: "Modern Design", label: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul." },
  { img: "work-progress", value: "Modern Design", label: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul." },
]