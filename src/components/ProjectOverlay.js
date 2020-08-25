import React from "react";
import ScreenshotNav from "./ScreenshotNav";

function ProjectOverlay({ state, manipulateOverlay }) {
    console.log(state);

    return (
        <section id="margin" className={`${state.visibility} fixed flex items-center justify-center top-0 left-0 h-full w-full`} onClick={manipulateOverlay} >
            <div className="flex flex-col h-2/3 w-full sm:rounded sm:w-5/6 lg:w-2/3 bg-rustyRed opacity-100">
                <h2 id="close" className="self-end text-white text-xl mx-2 cursor-pointer">⨯</h2>

                <h2 className="self-center text-3xl text-white" id="projectName">{state.overlayProject.name}</h2>

                <article className="flex flex-col justify-center items-center m-4 h-2/3">
                    <img className="max-h-full" id="screenshot" src={state.overlayProject.screenshots ? state.overlayProject.screenshots[state.carouselSlide] : "https://via.placeholder.com/150"} alt={`${state.overlayProject.name} Screenshots`} />

                    <ScreenshotNav buttonCount={state.overlayProject.screenshots}/>
                </article>
            </div>
        </section>
    );
}

export default ProjectOverlay;