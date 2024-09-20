"use client";
import { useState } from "react";
import { IProjectList, projects, ProjectDescriptionContainer, ProjectListContainer } from "./Project";

export function MainCard() {
  const [activeProject, setProject] = useState<IProjectList>(Array.from(projects.values())[0]);
  return (
    <div className="grid md:grid-cols-[70%_30%] md:visible bg-slate-800 h-full overflow-auto">
      <ProjectDescriptionContainer project={activeProject}></ProjectDescriptionContainer>
      <ProjectListContainer activeProject={activeProject} setProject={setProject}></ProjectListContainer>
    </div>
  );
}
