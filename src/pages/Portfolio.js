import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectOverlay from "../components/ProjectOverlay";
import projects from "../assets/data/projects";

class Portfolio extends Component {
    state = {
        overlayProject: {},
        visibility: "invisible",
        carouselSlide: 0
    };

    openOverlay = (e) => {
        this.setState({
            overlayProject: projects[e.currentTarget.id],
            visibility: "visible"
        });
    };

    manipulateOverlay = (e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            case "margin":
            case "close":
                this.setState({
                    overlayProject: {},
                    visibility: "invisible",
                    carouselSlide: 0
                });
                break;
            case "forward":
                this.setState({
                    carouselSlide: this.state.carouselSlide === (this.state.overlayProject.screenshots.length - 1) ? 0 : (this.state.carouselSlide + 1)
                });
                break;
            case "back":
                this.setState({
                    carouselSlide: this.state.carouselSlide === 0 ? (this.state.overlayProject.screenshots.length - 1) : (this.state.carouselSlide - 1)
                });
                break;
            case "imageNumber":
                this.setState({
                    carouselSlide: parseInt(e.target.name)
                });
                break;
            default:
                break;
        };
    };

    render() {
        return(
            <main className="mx-auto my-4 w-5/6 pb-12">
                <h2 className="text-2xl py-2">Portfolio</h2>

                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map(project => {
                        return (
                            <ProjectCard project={project} openOverlay={this.openOverlay} key={project.id} />
                        )
                    })}
                </section>

                <ProjectOverlay state={this.state} manipulateOverlay={this.manipulateOverlay} />
            </main>
        );
    };
}

export default Portfolio;