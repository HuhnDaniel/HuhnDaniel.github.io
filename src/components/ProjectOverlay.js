import React from "react";

function ProjectOverlay({ toggleOverlay }) {

    return (
        <section className="invisible fixed flex items-center justify-center top-0 left-0 h-full w-full" onClick={toggleOverlay} >
            <article className="h-2/3 w-full sm:rounded sm:w-5/6 lg:w-2/3 bg-rustyRed opacity-100">hi</article>
        </section>
    );
}

export default ProjectOverlay;