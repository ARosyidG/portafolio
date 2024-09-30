import { IProjectList } from "./Projects";

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