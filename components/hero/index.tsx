"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <main className="w-full h-auto text-white text-center gap-6 items-center justify-center">
      <section className="bg-background w-full flex flex-col text-center gap-3 py-12 px-4 sm:px-6 md:px-12 xl:px-24">
        <h2 className="text-4xl font-bold">A Clean and Modern Template</h2>
        <h4>Get your freebie template now!</h4>
        <div className="relative mt-[5rem] w-full h-[30rem]">
          <Image
            fill
            className="slide-img"
            src="/device.png" alt=""
          />
        </div>
      </section>

      <section className="bg-none text-white text-[10px] grid grid-cols md:grid-cols-3 gap-6 py-12 px-4 sm:px-6 md:px-12 xl:px-24">
        {lists.map((list, index) => (
          <div key={index} className="text-center">
            <span className="flex text-background font-bold text-7xl items-center justify-center mx-auto mb-2">
              0{index + 1}.
            </span>
            <div className="text-xl font-bold text-gray-900">{list.value}</div>
            <div className="text-sm text-gray-600">{list.label}</div>
          </div>
        ))}
      </section>
      <div className="col-12 text-center mt-8 mb-12">
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full">Discover More</a>
      </div>
    </main>
  )
}

const lists = [
  { value: "No1 in Sales!", label: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul." },
  { value: "Online Marketing", label: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul." },
  { value: "Modern Design", label: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul." },
]