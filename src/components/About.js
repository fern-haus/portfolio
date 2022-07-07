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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sollicitudin tempor id eu nisl nunc mi. Donec massa
                    sapien faucibus et molestie. At volutpat diam ut venenatis
                    tellus in metus vulputate. A diam sollicitudin tempor id eu
                    nisl nunc mi. Eget sit amet tellus cras adipiscing enim. Vel
                    pretium lectus quam id leo in. Consectetur adipiscing elit
                    duis tristique sollicitudin.
                </div>
            </div>
        </div>
    );
}
