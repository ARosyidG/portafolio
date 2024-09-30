"use client";
import { useState } from "react";
import { IProjectList, projects } from "./Component/Projects";
import { ProjectDescriptionContainer } from "./Component/ProjectDescription";
import { ProjectListContainer } from "./Component/ProjectList";

export function MainCard() {
  const [activeProject, setProject] = useState<IProjectList>(Array.from(projects.values())[0]);

  return (
    <div className="grid md:grid-cols-[75%_25%] lg:grid-cols-[70%_30%] md:max-h-96">
      <ProjectDescriptionContainer project={activeProject}></ProjectDescriptionContainer>
      <ProjectListContainer activeProject={activeProject} setProject={setProject}></ProjectListContainer>
    </div>
  );
}
