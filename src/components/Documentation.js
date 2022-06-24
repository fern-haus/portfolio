import { getProjectObject } from "./Project";
import Post from "./Post";

export default function Documentation({ project }) {
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
                  <Post {...{ key: post.id, post }} />
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
            {displayDescription(description)}
            {displayDocumentation(documentation)}
            {/* <pre>{JSON.stringify(documentation, null, 4)}</pre> */}
        </>
    );
}
