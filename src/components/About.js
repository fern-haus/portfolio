import "../css/about.css";
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
                <div className="info">
                    Born in San Diego, Alec has worked as a front-end web
                    developer in both Southern California and the Bay Area. He
                    graduated with a B.A. in journalism from San Francisco State
                    University where he also studied web development as an
                    online editor. His past employers include start-ups and
                    small businesses looking to improve their online image.
                </div>
            </div>
        </div>
    );
}
