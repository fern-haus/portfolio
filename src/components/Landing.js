import "../css/landing.css";
import ScrollButton from "./ScrollButton";
import malachite from "../assets/malachite-transparent.png";

export default function Landing() {
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
                <nav>
                    <ScrollButton id="blog" text="Blog" />
                    <ScrollButton id="portfolio" text="Portfolio" />
                    <ScrollButton id="about" text="About" />
                </nav>
                <nav></nav>
            </div>
        </div>
    );
}
