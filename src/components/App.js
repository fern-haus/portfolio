import { useEffect, useState } from "react";
import Landing from "./Landing";
import NameHeader from "./NameHeader";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import About from "./About";

export default function App() {
    const [section, setSection] = useState("landing");

    useEffect(
        () =>
            document
                .getElementById(section)
                .scrollIntoView({ behavior: "smooth" }),
        [section]
    );

    return (
        <>
            <Landing {...{ setSection }} />
            <NameHeader {...{ section, setSection }} />
            <Blog />
            <Portfolio />
            <About />
        </>
    );
}
