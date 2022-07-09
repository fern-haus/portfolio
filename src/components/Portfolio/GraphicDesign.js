import "../../css/graphic-design.css";
import prova1 from "../../assets/graphic-design/prova-1.png";
import prova2 from "../../assets/graphic-design/prova-2.png";
import prova3 from "../../assets/graphic-design/prova-3.png";
import prova4 from "../../assets/graphic-design/prova-4.png";
import image1 from "../../assets/graphic-design/1.png";
import image2 from "../../assets/graphic-design/2.png";
import image3 from "../../assets/graphic-design/3.gif";
import image4 from "../../assets/graphic-design/4.gif";
import image5 from "../../assets/graphic-design/5.png";
import image6 from "../../assets/graphic-design/6.png";
import image7 from "../../assets/graphic-design/7.png";
import image8 from "../../assets/graphic-design/8.png";
import image9 from "../../assets/graphic-design/9.png";

export default function GraphicDesign() {
    const images = [
        prova1,
        prova2,
        prova3,
        prova4,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
    ];

    return (
        <div id="graphic-design">
            <h1>Graphic Design</h1>
            <div id="gallery">
                {images.map((image) => (
                    <a
                        key={image}
                        href={image}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={image} />
                    </a>
                ))}
            </div>
        </div>
    );
}
