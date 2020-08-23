import React from "react";
import campsiteFinderLogo from "../assets/images/campsite-finder-logo.png";
import projectBooleanLogo from "../assets/images/project-boolean-logo.png";
import inQuireLogo from "../assets/images/inquire-logo.png";
import ProjectCard from "../components/ProjectCard";
import ProjectOverlay from "../components/ProjectOverlay";
import projects from "../assets/projects";

function Portfolio() {
    function toggleOverlay(e) {
        console.log(e.currentTarget.id);
    };

    console.log(projects);

    return(
        <main className="mx-auto my-4 w-5/6">
            <h2 className="text-2xl py-2">Portfolio</h2>

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, i) => {
                    return (
                        <ProjectCard project={project} toggleOverlay={toggleOverlay} key={i} />
                    )
                })}
                {/* <ProjectCard name="InQuire" deploy="https://inquire-6846.herokuapp.com/" github="https://github.com/damianjuan/Project-3/tree/master" logo={inQuireLogo} toggleOverlay={toggleOverlay}/>
                <ProjectCard name="Project Boolean" deploy="https://project-boolean.herokuapp.com/" github="https://github.com/HuhnDaniel/project-boolean/tree/master" logo={projectBooleanLogo} toggleOverlay={toggleOverlay}/>
                <ProjectCard name="Campsite Finder" deploy="https://huhndaniel.github.io/campsite-finder/" github="https://github.com/HuhnDaniel/campsite-finder/tree/master" logo={campsiteFinderLogo} toggleOverlay={toggleOverlay}/> */}
            </section>

            <ProjectOverlay toggleOverlay={toggleOverlay} />
        </main>
    );
}

export default Portfolio;