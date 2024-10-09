"use client";
import { Content} from "./Content";
import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
export default function Home() {
  const [activeContent, setContent] = useState<string>("Projects");
  const [header, setHeader] = useState<string>(activeContent);
  const [isShownPageChanged, setIsShownPageChanged] = useState<boolean>(false);
  useEffect(() => {
    setIsShownPageChanged(true);
    const timeout = setTimeout(() => {
      setHeader(activeContent);
      setIsShownPageChanged(false);
    }, 150); // Match this duration with the CSS transition duration

    return () => clearTimeout(timeout);
  }, [activeContent]);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-bl from-slate-900 via-slate-950 to-slate-800 px-6">
      <div className="absolute md:inset-x-10 lg:inset-x-20 xl:inset-x-40 p-4">
        <div className="text-start my-6 md:mx-10">
          <h1 className="text-l lg:text-2xl">Ganausi&apos;s</h1>
          <div
            className={`text-4xl lg:text-6xl transition-opacity duration-150 ${
              isShownPageChanged ? "opacity-0" : "opacity-100"
            }`}
          >
            {header}
          </div>
          <Navbar content={activeContent} setContent={setContent} />
        </div>
        <Content activeContent={activeContent}/>
      </div>
    </main>
  );
}
