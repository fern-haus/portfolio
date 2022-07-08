import "../../css/home.css";
import React from "react";
import { projects } from "./SelectProject";

export default function Home({ setProject }) {
    return (
        <div id="home">
            {Object.keys(projects)
                .slice(1)
                .map((projectType) => (
                    <React.Fragment key={projectType}>
                        <h2>{projectType}</h2>
                        <div className="project-buttons">
                            {Object.keys(projects[projectType]).map(
                                (projectName) => (
                                    <button
                                        key={`homepage button for ${projectName}`}
                                        className="button-link"
                                        onClick={() => setProject(projectName)}
                                    >
                                        {projectName}
                                    </button>
                                )
                            )}
                        </div>
                    </React.Fragment>
                ))}
        </div>
    );
}
