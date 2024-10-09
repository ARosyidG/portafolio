import AboutContainer from "./Component/About";
import EducationContainer from "./Component/Education";
import ProjectsContainer from "./Component/Projects";

export function Content({ activeContent }: { activeContent: string }) {
  switch (activeContent) {
    case "Projects":
      return <ProjectsContainer />
    case "About":
      return <AboutContainer />
    case "Education":
      return <EducationContainer/> 
    default:
      break;
  }
}
