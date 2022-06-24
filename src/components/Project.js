import Home from "./Home";
import { projects } from "./SelectProject";

export default function Project({ project, setProject }) {
    const { project_url } = getProjectObject(project);

    return project_url ? (
        <iframe src={project_url} title={project} />
    ) : (
        <Home {...{ setProject }} />
    );
}

function getProjectObject(name) {
    return name === "Home"
        ? projects[name]
        : Object.values(projects).find((value) =>
              Object.keys(value).includes(name)
          )[name];
}

export { getProjectObject };
