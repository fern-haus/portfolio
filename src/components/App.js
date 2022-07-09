import { useEffect, useState } from "react";
import Landing from "./Landing";
import NameHeader from "./NameHeader";
import Blog from "./Blog";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About";
import GraphicDesign from "./Portfolio/GraphicDesign";

export default function App() {
    const [section, setSection] = useState("landing");

    useEffect(() => {
        const top = document.getElementById(section).offsetTop;
        window.scrollTo({ top, left: 0, behavior: "smooth" });
    }, [section]);

    return (
        <>
            <Landing {...{ setSection }} />
            <NameHeader {...{ section, setSection }} />
            <Blog />
            <Portfolio />
            <GraphicDesign />
            <About />
        </>
    );
}
