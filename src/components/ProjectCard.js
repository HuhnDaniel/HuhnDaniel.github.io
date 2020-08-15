import React from "react";

function ProjectCard({ name, deploy, github, logo }) {
    return (
        <article className="bg-navyBlue rounded-md mx-auto my-4 p-4 h-80 w-80">
            <h3 className="text-xl pb-4">{name}</h3>

            <figure className="flex items-center mx-auto align-middle h-48 w-48">
                <a href={deploy} target="_blank" rel="noopener noreferrer">
                    <img className="w-48" data-project={name} src={logo} alt="Project Boolean link" />
                </a>
            </figure>

            <p className="text-right mt-2"><a href={github} className="text-blue-500" target="_blank" rel="noopener noreferrer">View on Github.</a></p>
        </article>
    );
}

export default ProjectCard;