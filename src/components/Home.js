import React from "react";
import { projects } from "./SelectProject";

export default function Home({ setProject }) {
    return (
        <div id="home">
            <h1>Home</h1>
            {Object.keys(projects)
                .slice(1)
                .map((projectType) => (
                    <React.Fragment key={projectType}>
                        <h2>{projectType}</h2>
                        {Object.keys(projects[projectType]).map(
                            (projectName) => (
                                <button
                                    key={`homepage button for ${projectName}`}
                                    onClick={() => setProject(projectName)}
                                >
                                    {projectName}
                                </button>
                            )
                        )}
                    </React.Fragment>
                ))}
        </div>
    );
}
