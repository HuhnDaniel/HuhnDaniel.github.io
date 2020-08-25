import React from "react";
import ScreenshotNav from "./ScreenshotNav";

function ProjectOverlay({ state, manipulateOverlay }) {
    console.log(state);

    return (
        <section id="margin" className={`${state.visibility} fixed flex items-center justify-center top-0 left-0 h-full w-full`} onClick={manipulateOverlay} >
            <div className="flex flex-col h-2/3 w-full sm:rounded sm:w-5/6 lg:w-2/3 bg-rustyRed opacity-100 overflow-y-auto">
                <h2 id="close" className="self-end text-white text-xl mx-2 cursor-pointer">⨯</h2>

                <a className="block self-center text-3xl text-white my-4" href={state.overlayProject.deploy} target="_blank" rel="noopener noreferrer">{state.overlayProject.name}</a>

                <article className="flex flex-col justify-center items-center mt-4 h-3/4">
                    <img className="max-h-full sm:max-h-20" id="screenshot" src={state.overlayProject.screenshots ? state.overlayProject.screenshots[state.carouselSlide] : "https://via.placeholder.com/150"} alt={`${state.overlayProject.name} Screenshots`} />

                    <ScreenshotNav buttonCount={state.overlayProject.screenshots}/>
                </article>

                <p className="m-4">{state.overlayProject.description}</p>
                <p className="m-4">{state.overlayProject.technologies}</p>

                <a className="block m-4 self-end" href={state.overlayProject.github} target="_blank" rel="noopener noreferrer">Github Repository</a>
            </div>
        </section>
    );
}

export default ProjectOverlay;