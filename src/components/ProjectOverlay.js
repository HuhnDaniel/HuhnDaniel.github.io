import React from "react";

function ProjectOverlay({ visibility, project, closeOverlay }) {

    return (
        <section id="margin" className={`${visibility} fixed flex items-center justify-center top-0 left-0 h-full w-full`} onClick={closeOverlay} >
            <article className="flex flex-col h-2/3 w-full sm:rounded sm:w-5/6 lg:w-2/3 bg-rustyRed opacity-100">
                <h2 id="close" className="self-end text-white text-xl mx-2 cursor-pointer">⨯</h2>
                <h2 className="self-center text-3xl text-white">{project.name}</h2>
            </article>
        </section>
    );
}

export default ProjectOverlay;