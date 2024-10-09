import ProjectsContainer from "./Component/Projects";

export function Content({ activeContent }: { activeContent: string }) {
  const isProject = activeContent == "Projects";
  if (isProject) {
    return <ProjectsContainer />;
  }
}
