import ProjectsContainer from "./Component/Projects";

export function MainCard({ theShownPage }: { theShownPage: string }) {
  const isProject = theShownPage == "Projects";
  if (isProject) {
    return <ProjectsContainer />;
  }
}
