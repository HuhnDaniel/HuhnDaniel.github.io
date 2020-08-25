import React from "react";

function ProjectCard({ project, openOverlay }) {
    return (
        <article id={project.id} className="bg-navyBlue rounded-md cursor-pointer mx-auto my-4 p-4 h-80 w-80 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105" onClick={openOverlay.bind(this)}>
            <h3 className="text-xl pb-4">{project.name}</h3>

            <figure className="flex items-center mx-auto align-middle h-48 w-48">
                <img className="w-48" data-project={project.name} src={project.logo} alt={`${project.name} Logo`} />
            </figure>
        </article>
    );
}

export default ProjectCard;