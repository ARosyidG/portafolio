"use client"
import React, { useState } from "react";
import { IProjectList, projects } from "./ProjectData";
import { ProjectDescriptionContainer } from "./ProjectDescription";
import { ProjectListContainer } from "./ProjectList";
function getProjectDesc(projectName: string) {
  return projects.get(projectName)?.desc;
}
export default function ProjectsContainer() {
  const [activeProject, setProject] = useState<IProjectList>(
    Array.from(projects.values())[0]
  );
  return (
    <div className="
    flex flex-col
    bg-slate-800
    shadow-md
    rounded-3xl
    overflow-hidden
    border
    md:max-h-96
    transition-all
    duration-150
  ">
      <div className="grid md:grid-cols-[75%_25%] lg:grid-cols-[70%_30%] md:max-h-96">
        <ProjectDescriptionContainer
          project={activeProject}
        ></ProjectDescriptionContainer>
        <ProjectListContainer
          activeProject={activeProject}
          setProject={setProject}
        ></ProjectListContainer>
      </div>
    </div>
  );
}
