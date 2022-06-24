export default function Tab({
    project,
    selectProject,
    type,
    showing,
    setShowing,
}) {
    const isShowing = type === showing,
        isProject = type === "project",
        isDocs = type === "documentation";

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
                    <span className="select-arrow">{"\u25BE"}</span>
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
