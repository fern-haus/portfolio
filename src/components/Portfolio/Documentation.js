import { getProjectObject } from "./Project";
import Post from "../Post";

export default function Documentation({ project, isLoaded }) {
    const { description, documentation, github_url } =
        getProjectObject(project);

    function displayDescription(description) {
        const display = getDisplayType(description);
        return display === "success" ? (
            <div
                className="project-description"
                dangerouslySetInnerHTML={{
                    __html: description
                        .split("\n")
                        .map((para) => `<p>${para}</p>`)
                        .join(""),
                }}
            ></div>
        ) : (
            <div className="project-description">
                {displayErrorOrLoading(display, "description", description)}
            </div>
        );
    }

    function displayDocumentation(documentation) {
        const display = getDisplayType(documentation);
        return display === "success"
            ? documentation?.map?.((post) => (
                  <Post {...{ key: post.id, post, isTitleLinked: false }} />
              ))
            : displayErrorOrLoading(display, "documentation", documentation);
    }

    function getDisplayType(obj) {
        return obj?.error ? "error" : !obj ? "loading" : "success";
    }

    function displayErrorOrLoading(display, kind, obj) {
        return display === "error" ? (
            <p>
                Could not load project {kind}. <u>Error: {obj.error}</u>
            </p>
        ) : (
            <p>Loading project {kind}...</p>
        );
    }

    return (
        <>
            <h1>{project}</h1>
            <h2>
                Documentation
                {github_url && (
                    <>
                        {" "}
                        <a
                            href={github_url}
                            target="_blank"
                            rel="noreferrer"
                            className="button-link"
                        >
                            github
                        </a>
                    </>
                )}
            </h2>
            {isLoaded ? (
                <>
                    {displayDescription(description)}
                    {displayDocumentation(documentation)}
                </>
            ) : (
                <p>
                    Getting all projects' documentation from{" "}
                    <a
                        href="https://fern.haus/blog"
                        target="_blank"
                        rel="noreferrer"
                    >
                        The Hungry Ghost
                    </a>
                    ...
                </p>
            )}
            {/* <pre>{JSON.stringify(documentation, null, 4)}</pre> */}
        </>
    );
}
