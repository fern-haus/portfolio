import { getProjectObject } from "./Project";

export default function Tab({
    project,
    selectProject,
    type,
    showing,
    setShowing,
}) {
    const isShowing = type === showing,
        isProject = type === "project",
        isDocs = type === "documentation",
        showNewTabLink = showing === "project" && project !== "Home";

    return (
        <div
            className={`tab-label ${type} ${
                isShowing ? "showing" : "not-showing"
            }`}
            onClick={() => setShowing(type)}
        >
            {isShowing ? (
                <label>
                    {isProject ? (
                        <>Select Project:</>
                    ) : isDocs ? (
                        <>Select Docs:</>
                    ) : (
                        <></>
                    )}
                    {selectProject}
                    <span
                        className={`select-arrow arrow-${
                            showNewTabLink ? "with-new-tab" : "without-new-tab"
                        }`}
                    >
                        {"\u25BE"}
                    </span>
                    {showNewTabLink && (
                        <a
                            className="open-new-tab"
                            href={getProjectObject(project).project_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {"\u29C9"}
                        </a>
                    )}
                </label>
            ) : (
                <>
                    View {project}
                    {isDocs && <> Docs</>}
                </>
            )}
        </div>
    );
}
