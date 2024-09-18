import { debug } from "console";
import Image from "next/image";
interface IProjectList{
  pojectName:string;
  about:string;
  desc:JSX.Element;
}
let projects = new Map<string,IProjectList>();
projects.set(
  "projectOne",
  {
    pojectName:"Project One",
    about:"This Project Is for Exam",
    desc: <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi numquam illum ipsa optio repellat soluta, voluptates excepturi sunt ratione quas, delectus praesentium reiciendis possimus placeat. Molestias at accusamus voluptate.</h1>
    </div>
  }
);
projects.set(
  "projectTwo",
  {
    pojectName:"Project Two",
    about:"This Project Is For My Final Project",
    desc: <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque error accusantium aliquid illo quas ad, illum rem dolor id sed consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus, molestias fugiat.</h1>
    </div>
  }
);
projects.set(
  "projectThree",
  {
    pojectName:"Project three",
    about:"This Project Is For This Web",
    desc: <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque error accusantium aliquid illo quas ad, illum rem dolor id sed consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus, molestias fugiat.</h1>
    </div>
  }
);
projects.set(
  "projectFour",
  {
    pojectName:"Project Four",
    about:"This Project Is For This Testing",
    desc: <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque error accusantium aliquid illo quas ad, illum rem dolor id sed consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus, molestias fugiat.</h1>
    </div>
  }
);
projects.set(
  "projectFive",
  {
    pojectName:"Project Five",
    about:"This Project Is For This Testing 2",
    desc: <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque error accusantium aliquid illo quas ad, illum rem dolor id sed consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus, molestias fugiat.</h1>
    </div>
  }
);
function getProjectDesc(projectName:string){
  return projects.get(projectName)?.desc;
}

function ProjectListContainer(){
  const _project = Array.from(projects.keys());
  return <div id="ProjectListContainer" className="rounded-b-3xl md:rounded-none md:rounded-r-3xl overflow-hidden">
    {
      _project.map(project => ProjectList(project))
    }
  </div>
}
function ProjectList(key:string){
  return <button className="transition ease-in-out hover:bg-slate-400 border-t border-b-2 w-full">
    <h1 className="text-xl">{projects.get(key)?.pojectName}</h1>
    <h2 className="text-xs italic md:text-sm">{projects.get(key)?.about}</h2>
  </button>
}

function ProjectDescriptionContainer(){
  let desc = getProjectDesc("projectOne");
  return <div id="ProjectDescriptionContainer" className="p-4">
    {desc}
  </div>
}

function ProjectDescription(){
  return <div>

  </div>
}

function MainCard(){
  return(
    <div className="
        flex flex-col
        bg-slate-800
        shadow-md
        rounded-3xl
        border
        md:max-h-80
        md:mx-40
        overflow-hidden
    ">
      <div className="grid md:grid-cols-[70%_30%] md:visible">
        <ProjectDescriptionContainer></ProjectDescriptionContainer>
        <ProjectListContainer></ProjectListContainer>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-white bg-slate-900 px-6">
      <MainCard></MainCard>
    </main>
  );
}
