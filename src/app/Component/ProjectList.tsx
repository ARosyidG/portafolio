import { IProjectList, projects } from "./ProjectData";

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
      className={`${
        _isActive ? "bg-gradient-to-r from-slate-600" : ""
      } border-slate-700 transition ease-in-out duration-300 hover:delay-0 delay-150 hover:bg-slate-700 p-1 border-y-2 w-full max-h-14 overflow-hidden`}
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
