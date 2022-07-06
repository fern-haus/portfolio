import "../css/landing.css";
import ScrollButton from "./ScrollButton";

export default function Landing() {
    return (
        <div id="landing">
            <h1>
                Alec
                <br />
                Fernandes
            </h1>
            <br />
            <ScrollButton id="portfolio" text="Portfolio" />
            <ScrollButton id="about" text="About" />
        </div>
    );
}
