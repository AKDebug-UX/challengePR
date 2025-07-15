"use client"

import Link from "next/link"
import * as React from "react"

export default function Navbar() {
  return (
    <header className="bg-background backdrop-blur-md flex border-b border-gray-100 px-4 sm:px-6 md:px-12 xl:px-24 py-4 sticky top-0 z-50 items-center justify-between shadow-sm">
      <div className="flex w-full mx-auto items-center justify-between">
        <h1 className="text-3xl font-bold">AK Logo</h1>
        <ul className="md:flex hidden gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/pages"}>Pages</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </ul>

        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md">Login</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md">Register</button>
        </div>
      </div>
    </header>
  )
}