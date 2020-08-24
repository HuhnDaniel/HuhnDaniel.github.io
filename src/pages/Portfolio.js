import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectOverlay from "../components/ProjectOverlay";
import projects from "../assets/data/projects";

class Portfolio extends Component {
    state = {
        overlayProject: {},
        visibility: "invisible"
    };

    openOverlay = (e) => {
        this.setState({
            overlayProject: projects[e.currentTarget.id],
            visibility: "visible"
        });
    };

    closeOverlay = (e) => {
        switch (e.target.id) {
            case "margin":
            case "close":
                this.setState({
                    overlayProject: {},
                    visibility: "invisible"
                });
                break;
            default:
                break;
        };
    };

    render() {
        return(
            <main className="mx-auto my-4 w-5/6">
                <h2 className="text-2xl py-2">Portfolio</h2>

                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map(project => {
                        return (
                            <ProjectCard project={project} openOverlay={this.openOverlay} key={project.id} />
                        )
                    })}
                </section>

                <ProjectOverlay visibility={this.state.visibility} project={this.state.overlayProject} closeOverlay={this.closeOverlay} />
            </main>
        );
    };
}

export default Portfolio;