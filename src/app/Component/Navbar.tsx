import React from "react";

export default function Navbar({content,setContent}:{content:string, setContent:(content:string) => void}) {
  return (
    <div id="navbar" className="flex lg:block my-4 w-full p-px">
      <button
        onClick={() => setContent("About")}
        className={`${content=="About"? "text-slate-800 bg-slate-400 font-bold md:w-36":"md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 md:text-sm border rounded-l-full px-4 py-1`}
      >
        About
      </button>
      <button
        onClick={() => setContent("Profile")}
        className={`${content=="Profile"? "text-slate-800 bg-slate-400 font-bold md:w-36":"md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 md:text-sm border px-4 py-1`}
      >
        Profile
      </button>
      <button
        onClick={() => setContent("Projects")}
        className={`${content=="Projects"? "text-slate-800 bg-slate-400 font-bold md:w-36":"md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 md:text-sm border px-4 py-1`}
      >
        Projects
      </button>
      <button
        onClick={() => setContent("Experience")}
        className={`${content=="Experience"? "text-slate-800 bg-slate-400 font-bold md:w-36":"md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 md:text-sm border px-4 py-1`}
      >
        Experience
      </button>
      <button
        onClick={() => setContent("Education")}
        className={`${content=="Education"? "text-slate-800 bg-slate-400 font-bold md:w-36":"md:w-28 hover:bg-slate-800"} transition-all duration-300 flex-1 md:text-sm border rounded-r-full px-4 py-1`}
      >
        Education
      </button>
    </div>
  );
}
