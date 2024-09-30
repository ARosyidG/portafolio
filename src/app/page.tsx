"use client";;
import { MainCard } from "./MainCard";
import { useState } from "react";
import Navbar from "./Component/Navbar";
export default function Home() {
  const [theShownPage, setPage] = useState<string>("Project");
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-bl from-slate-900 via-slate-950 to-slate-800 px-6">
      <div className="md:mx-10 lg:mx-20 xl:mx-40 min-w-96 p-4">
        <div className="text-start my-6 md:mx-10">
          <h1 className="text-l lg:text-2xl">Ganausi&apos;s</h1>
          <h2 className="text-4xl lg:text-6xl">Projects List</h2>
          <Navbar theShownPage={theShownPage} setPage={setPage} />
        </div>
        <div className="relative bg-gradient-to-r from-fuchsia-100 via-slate-400 to-lime-100 p-px rounded-3xl">
          <div
            className="
            flex flex-col
            bg-slate-800
            shadow-md
            rounded-3xl
            overflow-hidden
            md:max-h-96
          "
          >
            <MainCard></MainCard>
          </div>
        </div>
      </div>
    </main>
  );
}
