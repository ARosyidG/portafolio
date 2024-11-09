import { IProjectList, projects } from "./ProjectData";

export function ProjectListContainer({
  activeProject,
  setProject,
}: {
  activeProject: IProjectList;
  setProject: (project: IProjectList) => void;
}) {
  const projectList = Array.from(projects.values());

  return (
    <div
      id="ProjectListContainer"
      className="
        no-scrollbar overflow-scroll
        rounded-b-3xl md:rounded-none md:rounded-r-3xl
        bg-gradient-to-r from-slate-900 via-slate-800
      "
    >
      {projectList.map((project) => (
        <ProjectList
          key={project.projectName}
          project={project}
          activeProject={activeProject}
          setProject={setProject}
        />
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
  const isActive = project.projectName === activeProject.projectName;

  return (
    <button
      onClick={() => setProject(project)}
      className={`
        ${isActive ? "bg-gradient-to-r from-slate-600" : "bg-gradient-to-r from-slate-900 via-slate-800"}
        w-full max-h-14 p-1 overflow-hidden
        border-y-2 border-slate-700
        transition duration-300 ease-in-out delay-150
        hover:bg-slate-700 hover:delay-0
      `}
    >
      <h1 className="text-xl truncate">{project.projectName}</h1>
      <h2
        className={`
          text-xs italic truncate
          ${isActive ? "md:block" : "md:hidden"} lg:block
        `}
      >
        {project.about}
      </h2>
    </button>
  );
}
