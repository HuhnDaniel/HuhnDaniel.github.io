import React from "react";
import campsiteFinderLogo from "../assets/images/campsite-finder-logo.png";
import projectBooleanLogo from "../assets/images/project-boolean-logo.png";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
    return(
        <main className="mx-auto my-4 w-5/6">
            <h2 className="text-2xl py-2">Portfolio</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <ProjectCard name="Project Boolean" deploy="https://project-boolean.herokuapp.com/" github="https://github.com/HuhnDaniel/project-boolean/tree/master" logo={projectBooleanLogo} />
                <ProjectCard name="Campsite Finder" deploy="https://huhndaniel.github.io/campsite-finder/" github="https://github.com/HuhnDaniel/campsite-finder/tree/master" logo={campsiteFinderLogo} />
            </div>
        </main>
    );
}

export default Portfolio;