import "../css/about.css";
import ScrollButton from "./ScrollButton";
import selfie from "../assets/me.jpg";

export default function About() {
    return (
        <div id="about">
            <div className="row">
                <img
                    className="selfie"
                    src={selfie}
                    alt="selfie of Alec Fernandes wearing a red and black checkered shirt"
                />
                <div className="info">Ipsum lorem whatever...</div>
            </div>
            <nav>
                <ScrollButton id="landing" text="Landing" />
                <ScrollButton id="portfolio" text="Portfolio" />
            </nav>
        </div>
    );
}
