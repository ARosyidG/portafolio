import React from "react";

export default function Navbar({theShownPage,setPage}:{theShownPage:string, setPage:(theShownPage:string) => void}) {
  return (
    <div id="navbar" className="flex md:block my-4 w-full p-px">
      <button
        onClick={() => setPage("About")}
        className={`${theShownPage=="About"? "text-slate-800 bg-slate-400 font-bold md:w-32":"md:w-24"} transition-all duration-300 flex-1 md:text-sm border rounded-l-full px-4 py-1`}
      >
        About
      </button>
      <button
        onClick={() => setPage("Profile")}
        className={`${theShownPage=="Profile"? "text-slate-800 bg-slate-400 font-bold md:w-32":"md:w-24"} transition-all duration-300 flex-1 md:text-sm border px-4 py-1`}
      >
        Profile
      </button>
      <button
        onClick={() => setPage("Project")}
        className={`${theShownPage=="Project"? "text-slate-800 bg-slate-400 font-bold md:w-32":"md:w-24"} transition-all duration-300 flex-1 md:text-sm border px-4 py-1`}
      >
        Project
      </button>
      <button
        onClick={() => setPage("Button")}
        className={`${theShownPage=="Button"? "text-slate-800 bg-slate-400 font-bold md:w-32":"md:w-24"} transition-all duration-300 flex-1 md:text-sm border rounded-r-full px-4 py-1`}
      >
        Button
      </button>
    </div>
  );
}
