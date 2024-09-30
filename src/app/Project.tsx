import React from "react";

export interface IProjectList {
  pojectName: string;
  about: string;
  desc: React.ReactNode;
}
// let activeProject:IProjectList;
export let projects = new Map<string, IProjectList>();
projects.set("projectOne", {
  pojectName: "Project One",
  about: "This Project Is for Exam",
  desc: (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        quasi numquam illum ipsa optio repellat soluta, voluptates excepturi
        sunt ratione quas, delectus praesentium reiciendis possimus placeat.
        Molestias at accusamus voluptate.
      </h1>
    </div>
  ),
});
projects.set("projectTwo", {
  pojectName: "Project Two",
  about: "This Project Is For My Final Project",
  desc: (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque
        error accusantium aliquid illo quas ad, illum rem dolor id sed
        consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus,
        molestias fugiat.
      </h1>
    </div>
  ),
});
projects.set("projectThree", {
  pojectName: "Project three",
  about: "This Project Is For This Web",
  desc: (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque
        error accusantium aliquid illo quas ad, illum rem dolor id sed
        consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus,
        molestias fugiat.
      </h1>
    </div>
  ),
});
projects.set("projectFour", {
  pojectName: "Project Four",
  about: "This Project Is For This Testing",
  desc: (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque
        error accusantium aliquid illo quas ad, illum rem dolor id sed
        consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus,
        molestias fugiat.
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        magnam pariatur minus cupiditate eos autem modi consequatur eius tenetur
        quis eveniet omnis laudantium enim voluptatem inventore id ipsa,
        quibusdam nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro
        saepe, dolore tenetur laudantium dolorem doloremque, aliquam rerum atque
        rem adipisci eos illum iure corporis, magni est unde similique facilis?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
        consectetur asperiores commodi at odit corrupti? Quos exercitationem
        atque corporis quis, mollitia vel, blanditiis et facilis architecto
        officiis sed vitae ratione.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque
        dolore illum, magni voluptates, nesciunt distinctio, saepe deleniti hic
        beatae a iure ratione incidunt similique? Eligendi ipsum exercitationem
        ex accusantium!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        dolorem ut fugiat tenetur aperiam libero mollitia corrupti. Tempora nemo
        veniam non quo quibusdam minima! Quis explicabo tenetur quaerat odit
        eligendi.
      </p>
    </div>
  ),
});
projects.set("projectFive", {
  pojectName: "Project Five",
  about: "This Project Is For This Testing 2",
  desc: (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque
        error accusantium aliquid illo quas ad, illum rem dolor id sed
        consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus,
        molestias fugiat.
      </h1>
    </div>
  ),
});
function getProjectDesc(projectName: string) {
  return projects.get(projectName)?.desc;
}
export function ProjectListContainer({
  activeProject,
  setProject,
}: {
  activeProject: IProjectList;
  setProject: (project: IProjectList) => void;
}) {
  const _projects = Array.from(projects.values());
  return (
    <div
      id="ProjectListContainer"
      className="rounded-b-3xl md:rounded-none md:rounded-r-3xl no-scrollbar overflow-scroll md:max-h-96"
    >
      {_projects.map((project) => (
        <ProjectList
          key={project.pojectName}
          project={project}
          activeProject={activeProject}
          setProject={setProject}
        ></ProjectList>
      ))}
    </div>
  );
}
function ProjectList({
  project,
  activeProject,
  setProject,
}: {
  project: IProjectList;
  activeProject: IProjectList;
  setProject: (project: IProjectList) => void;
}) {
  const _isActive: boolean = project.pojectName === activeProject.pojectName;
  return (
    <button
      onClick={() => setProject(project)}
      className={
        (_isActive ? "bg-gradient-to-r from-slate-600" : "") +
        " border-slate-700 transition ease-in-out duration-300 hover:delay-0 delay-150 hover:bg-slate-700 p-1 border-y-2 w-full max-h-14 overflow-hidden"
      }
    >
      <h1 className="text-xl truncate">{project.pojectName}</h1>
      <h2
        className={
          (_isActive ? "md:block" : "md:hidden") +
          " text-xs italic truncate lg:block"
        }
      >
        {project.about}
      </h2>
    </button>
  );
}
export function ProjectDescriptionContainer({
  project,
}: {
  project: IProjectList;
}) {
  return (
    <div
      id="ProjectDescriptionContainer"
      className="p-4 bg-slate-600 md:max-h-96 relative"
    >
      <div className="absolute h-6 right-0 left-0 bg-gradient-to-b from-slate-600"></div>
      <div className="py-4 pr-1 pb-12 no-scrollbar overflow-scroll h-full">
        <ProjectDescription project={project}></ProjectDescription>
      </div>
      <div className="absolute h-20 bottom-4 right-0 left-0 bg-gradient-to-t from-slate-600"></div>
    </div>
  );
}
function ProjectDescription({ project }: { project: IProjectList }) {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl">{project.pojectName}</h1>
      <h2 className="text-slate-400 text-xs italic">{project.about}</h2>
      <div className="border-slate-500 border-b mb-2"></div>
      {project.desc}
    </div>
  );
}
