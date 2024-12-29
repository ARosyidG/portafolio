"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'

export function Navbar({ setTransitionStart, setHeader, setIsLoading }: {
  setTransitionStart: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setHeader: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [pathname, setPathName] = useState(usePathname());
  const router = useRouter();
  useEffect(()=>{
    if(pathname === "/"){
      handleLinkClick("/About");
    }
  },[pathname]);
  const handleLinkClick = (href: string) => {
    if (href === pathname) {
      return;
    }
    console.log('Performing some logic before navigation to:', href);
    setTransitionStart(true);
    setPathName(href);
    const timeout = setTimeout(() => {
      setIsLoading(true);
      router.push(href);
    }, 300);
    setHeader(href);
    return () => clearTimeout(timeout);
  };
  return (
    <div id="navbar" className="grid grid-cols-2 gap-1 sms:gap-0 sms:flex lg:block my-4 w-full p-px">
      <button
        onClick={() => handleLinkClick("/About")}
        className={`${pathname === "/About" ? "text-slate-800 bg-slate-400 font-bold md:w-40" : "md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 text-xs md:text-sm border sms:rounded-l-full px-4 py-1 inline-block text-center`}
      >
        About
      </button>
      <button
        onClick={() => handleLinkClick("/Projects")}
        className={`${pathname === "/Projects" ? "text-slate-800 bg-slate-400 font-bold md:w-40" : "md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 text-xs md:text-sm border px-4 py-1 inline-block text-center`}
      >
        Projects
      </button>
      <button
        onClick={() => handleLinkClick("/Experience")}
        className={`${pathname === "/Experience" ? "text-slate-800 bg-slate-400 font-bold md:w-40" : "md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 text-xs md:text-sm border px-4 py-1 inline-block text-center`}
      >
        Experience
      </button>
      <button
        onClick={() => handleLinkClick("/Education")}
        className={`${pathname === "/Education" ? "text-slate-800 bg-slate-400 font-bold md:w-40" : "md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 text-xs md:text-sm border sms:rounded-r-full px-4 py-1 inline-block text-center`}
      >
        Education
      </button>
    </div>
  );
}

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isTransitionStart, setTransitionStart] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [header, setHeader] = useState<string>(pathname);
  useEffect(()=>{
    setTransitionStart(false);
    setIsLoading(false);
  },[pathname]);
  return (
    <main className="min-h-screen w-full flex flex-col items-center text-white bg-gradient-to-bl from-slate-900 via-slate-950 to-slate-800 px-4 md:px-[10vh]">
      <div className="w-full relative">
        <div className="text-start my-6 md:mx-10">
          <div
            className={`transition-all duration-150 ${
              isTransitionStart ? "-translate-y-6 blur-sm opacity-0" : "-translate-y-0 blur-0 opacity-100"
            }`}
          >
            <h1 className="text-l lg:text-2xl">Ganausi&apos;s</h1>
            <div
              className={`text-4xl lg:text-6xl transition-all duration-150 ${
                isTransitionStart ? "-translate-y-6 opacity-0" : "-translate-y-0 opacity-100"
              }`}
            >
              {header}
            </div>
          </div>
          <Navbar setTransitionStart={setTransitionStart} setHeader={setHeader} setIsLoading={setIsLoading}/>
        </div>
        <div className="flex">
          <div
            id="content"
            className={`overflow-hidden transition-all duration-300 z-10 ${
              isTransitionStart ? "w-0" : "w-full"
            }`}
          >
            {children}
          </div>
          <div className={`transition-all flex w-full items-center justify-center absolute ${isLoading ? "translate-y-0 blur-0 opacity-100" : "translate-y-10 blur-sm opacity-0"}`}>
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
