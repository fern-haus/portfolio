import "../css/landing.css";
import ScrollButton from "./ScrollButton";
import malachite from "../assets/malachite-transparent.png";
import { sections } from "./NameHeader";

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
                    {Object.entries(sections).map(
                        ([id, text]) =>
                            id !== "landing" && (
                                <ScrollButton
                                    {...{
                                        key: `landing scroll button ${id}`,
                                        setSection,
                                        id,
                                        text,
                                    }}
                                />
                            )
                    )}
                </nav>
                <nav></nav>
            </div>
        </div>
    );
}
