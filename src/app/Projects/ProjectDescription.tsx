import { IProjectList } from "./ProjectData";

export function ProjectDescriptionContainer({
    project,
  }: {
    project: IProjectList;
  }) {
    return (
      <div
        id="ProjectDescriptionContainer"
        className="p-4 px-10 text-sm bg-slate-600 md:max-h-[60vh] relative"
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
        <h1 className="text-2xl md:text-4xl">{project.projectName}</h1>
        <h2 className="text-slate-400 text-xs italic">
          {project.about}
          {project.githubLink && (
            <>
              {' | '}
              <a target="_blank" className="text-slate-200 font-bold" href={project.githubLink}>Github Link</a>
            </>
          )}
        </h2>
        <div className="border-slate-500 border-b mb-4"></div>
        {project.desc}
      </div>
    );
  }