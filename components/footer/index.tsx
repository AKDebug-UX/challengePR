"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer className="bg-background text-white grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4 sm:px-6 md:px-12 xl:px-24">
        <div className="flex flex-col w-full mx-auto gap-4 items-start">
          <h1 className="text-2xl font-bold">AK Logo</h1>
          <p className="text-[15px]">Etiam nec odio vestibulum est mattis effic iturut magna. Pellent esque sit amet tellus blandit. Etiam nec odio vestibul.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Fast links</h1>
          <ul className="flex flex-col text-[15px] gap-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Testimonials</Link>
            <Link href={"/"}>Services & Features</Link>
            <Link href={"/"}>Accordions and tabs</Link>
            <Link href={"/"}>Menu ideas</Link>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Blog</h1>
          <ul className="flex flex-col text-[10px] gap-4">
            <div className="flex flex-col">
              <Link href={"/"}>23 September, 2017</Link>
              <Link href={"/"}>Why we love stock photos</Link>
            </div>
            <div className="flex flex-col">
              <Link href={"/"}>22 September, 2017</Link>
              <Link href={"/"}>Designin on grid. A few rules.</Link>
            </div>
            <div className="flex flex-col">
              <Link href={"/"}>20 September, 2017</Link>
              <Link href={"/"}>2017 World Design Congress</Link>
            </div>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Contact Info</h1>
          <ul className="flex flex-col text-[15px] gap-4">
            <div className="flex flex-col">
              <p>4127/ 5B-C Mislane Road,</p>
              <p>Gibraltar, UK</p>
            </div>
            <div className="flex flex-col">
              <Link href={"/"}>Main: 203-808-8613</Link>
              <Link href={"/"}>Office: 203-808-8648</Link>
            </div>
            <div className="flex flex-col">
              <Link href={"/"}>office@yourbusiness.com</Link>
            </div>
          </ul>
        </div>
      </footer>

      <footer className="bg-black/80 text-white text-[10px] grid grid-cols md:grid-cols-2 gap-6 py-3 px-4 sm:px-6 md:px-12 xl:px-24">
        <p>Copyright ©2025 All rights reserved | This template is made with ❤️ by <a href="https://upraisertech.vercel.app/">AKDebug</a></p>
      </footer>
    </>
  )
}