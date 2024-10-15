"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  return (
    <div id="navbar" className="flex lg:block my-4 w-full p-px">
      <Link
        href="/About"
        className={`${pathname === "/About" ? "text-slate-800 bg-slate-400 font-bold md:w-40" : "md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 md:text-sm border rounded-l-full px-4 py-1 inline-block text-center`}
      >
        About
      </Link>
      <Link
        href="/Projects"
        className={`${pathname === "/Projects" ? "text-slate-800 bg-slate-400 font-bold md:w-40" : "md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 md:text-sm border px-4 py-1 inline-block text-center`}
      >
        Projects
      </Link>
      <Link
        href="/Experience"
        className={`${pathname === "/Experience" ? "text-slate-800 bg-slate-400 font-bold md:w-40" : "md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 md:text-sm border px-4 py-1 inline-block text-center`}
      >
        Experience
      </Link>
      <Link
        href="/Education"
        className={`${pathname === "/Education" ? "text-slate-800 bg-slate-400 font-bold md:w-40" : "md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 md:text-sm border rounded-r-full px-4 py-1 inline-block text-center`}
      >
        Education
      </Link>
    </div>
  );
}

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isTransitionStart, setTransitionStart] = useState<boolean>(false)
  const [header, setHeader] = useState<string>("")
  useEffect(() => {
    setTransitionStart(true);
    const timeout = setTimeout(() => {
      setHeader(pathname)
      setTransitionStart(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [pathname])
  return (
    <main className="min-h-screen flex flex-col items-center text-white bg-gradient-to-bl from-slate-900 via-slate-950 to-slate-800 px-6">
      <div className="md:inset-x-10 lg:inset-x-20 xl:inset-x-40 p-4 md:absolute">
        <div className="text-start my-6 md:mx-10">
          <div className={
            `transition-all duration-150 ${isTransitionStart ? "-translate-y-6 blur-sm opacity-0" : "-translate-y-0 blur-0 opacity-100"}`
          }>
            <h1 className="text-l lg:text-2xl">Ganausi&apos;s</h1>
            <div
              className={`text-4xl lg:text-6xl transition-all duration-150 ${isTransitionStart ? "-translate-y-6 opacity-0" : "-translate-y-0 opacity-100"}`}
            >
              {header}
            </div>
          </div>
          <Navbar />
        </div>
        <div className={
          `overflow-hidden transition-all duration-300 ${isTransitionStart ? "w-0" : " w-full"}`
        }>
          {children}
        </div>
      </div>
    </main>
  )
}