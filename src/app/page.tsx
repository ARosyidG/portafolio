"use client";
import { Content } from "./Content";
import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
export default function Home() {
  const [activeContent, setContent] = useState<string>("About");
  const [header, setHeader] = useState<string>(activeContent);
  const [contentShown, setContentShown] = useState<React.ReactNode>(<Content activeContent={activeContent} />) 
  const [isContentChanged, setIsContentChanged] = useState<boolean>(false);
  useEffect(() => {
    setIsContentChanged(true);
    const timeout = setTimeout(() => {
      setHeader(activeContent);
      setContentShown(<Content activeContent={activeContent} />);
      setIsContentChanged(false);
    }, 300); 

    return () => clearTimeout(timeout);
  }, [activeContent]);
  return (
    <main className="min-h-screen flex flex-col items-center text-white bg-gradient-to-bl from-slate-900 via-slate-950 to-slate-800 px-6">
      <div className="md:inset-x-10 lg:inset-x-20 xl:inset-x-40 p-4 md:absolute">
        <div className="text-start my-6 md:mx-10">
          <div className={
            `transition-all duration-150 ${isContentChanged ? "-translate-y-6 blur-sm opacity-0" : "-translate-y-0 blur-0 opacity-100"}`
          }>
            <h1 className="text-l lg:text-2xl">Ganausi&apos;s</h1>
            <div
              className={`text-4xl lg:text-6xl transition-all duration-150 ${isContentChanged ? "-translate-y-6 opacity-0" : "-translate-y-0 opacity-100"}`}
            >
              {header}
            </div>
          </div>
          <Navbar content={activeContent} setContent={setContent} />
        </div>
        <div className={
          `overflow-hidden transition-all duration-300 ${isContentChanged ? "w-0" : " w-full"}`
        }>
          {contentShown}
        </div>
      </div>
    </main>
  );
}
