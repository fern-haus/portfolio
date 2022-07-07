import "../../css/portfolio.css";
import { useEffect, useState } from "react";
import Documentation from "./Documentation";
import Project from "./Project";
import SelectProject, { projects, getAllDocumentation } from "./SelectProject";
import Tab from "./Tab";

function tabHandler() {
    const tabs = [...document.getElementsByClassName("tab-label")].sort(
            (a, b) => a.offsetTop - b.offsetTop
        ),
        isProjectTabShowing = tabs.find((tab) => {
            const cl = [...tab.classList];
            return cl.includes("project") && cl.includes("showing");
        }),
        yPositions = new Set(tabs.map((tab) => tab.offsetTop)),
        areStacked = yPositions.size > 1,
        navElem = document
            .getElementById("portfolio")
            .getElementsByTagName("nav")[0];
    navElem.style.flexWrap =
        areStacked && isProjectTabShowing ? "wrap-reverse" : "wrap";
    navElem.style.backgroundImage = areStacked
        ? "linear-gradient(to top, #aaa 50%, transparent 50%)"
        : "none";
}

window.onresize = tabHandler;

function getProjectParam() {
    let params = new URLSearchParams(document.location.search);
    return params.get("project");
}

export default function Portfolio() {
    const [isLoaded, setIsLoaded] = useState(false),
        [project, setProject] = useState(getProjectParam() || "Home"),
        [showing, setShowing] = useState("project"),
        selectProject = <SelectProject {...{ project, setProject }} />,
        TabBuilder = ({ type }) => (
            <Tab {...{ project, selectProject, type, showing, setShowing }} />
        );

    useEffect(tabHandler);

    useEffect(() => {
        getAllDocumentation(projects).then((resp) => setIsLoaded(true));
    }, []);

    return (
        <div id="portfolio">
            <nav>
                <TabBuilder type="project" />
                <TabBuilder type="documentation" />
            </nav>
            <main>
                <div
                    id="content"
                    className={
                        project !== "Home" && showing === "project"
                            ? "has-iframe"
                            : ""
                    }
                >
                    {showing === "project" && (
                        <Project {...{ project, setProject }} />
                    )}
                    {showing === "documentation" && (
                        <Documentation {...{ project, isLoaded }} />
                    )}
                </div>
            </main>
        </div>
    );
}
