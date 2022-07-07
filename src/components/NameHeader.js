import "../css/name-header.css";
import ScrollButton from "./ScrollButton";

export default function NameHeader({ section }) {
    const sections = {
        landing: "Home",
        blog: "Blog",
        portfolio: "Portfolio",
        about: "About Me",
    };

    return (
        <header className="name-header">
            <h1>Alec Fernandes</h1>
            <nav>
                <h2>{sections[section]}</h2>
                {Object.keys(sections)
                    .filter((sect) => sect !== section)
                    .map((sect) => (
                        <ScrollButton
                            key={`section/${sect}`}
                            id={sect}
                            text={sections[sect]}
                        />
                    ))}
            </nav>
        </header>
    );
}
