import { debug } from "console";
import Image from "next/image";
import { MainCard } from "./MainCard";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-white bg-slate-900 px-6">
      <div className="md:mx-20 lg:mx-40">  
        <div className="text-start my-4 md:mx-10">
          <h1 className="text-l lg:text-2xl">Ganausi&apos;s</h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl">Projects List</h2>
        </div>
        <div className="
          flex flex-col
          bg-slate-800
          shadow-md
          rounded-3xl
          border
          overflow-hidden
          h-100
          md:max-h-80
        ">
          <MainCard></MainCard>
        </div>
      </div>
    </main>
  );
}

