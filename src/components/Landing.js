import "../css/landing.css";
import ScrollButton from "./ScrollButton";
import malachite from "../assets/malachite-transparent.png";

export default function Landing({ setSection }) {
    return (
        <div id="landing">
            <div className="content-container">
                <h1>
                    Alec
                    <br />
                    Fernandes
                </h1>
                <br />
                <img
                    src={malachite}
                    id="malachite"
                    alt="cross-section of malachite stone"
                />
                <nav id="sections">
                    <ScrollButton
                        {...{ setSection, id: "blog", text: "Blog" }}
                    />
                    <ScrollButton
                        {...{ setSection, id: "portfolio", text: "Portfolio" }}
                    />
                    <ScrollButton
                        {...{ setSection, id: "about", text: "About Me" }}
                    />
                </nav>
                <nav></nav>
            </div>
        </div>
    );
}
