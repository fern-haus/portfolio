import "../css/name-header.css";
import ScrollButton from "./ScrollButton";

export default function NameHeader({ section, setSection }) {
    const sections = {
        landing: "Home",
        blog: "Blog",
        portfolio: "Portfolio",
        about: "About Me",
    };

    return (
        <header id="name-header">
            <h1>Alec Fernandes</h1>
            <nav>
                {Object.keys(sections).map((sect) =>
                    sect === section ? (
                        <h2 key={`section/${sect}`}>{sections[section]}</h2>
                    ) : (
                        <ScrollButton
                            {...{
                                setSection,
                                key: `section/${sect}`,
                                id: sect,
                                text: sections[sect],
                            }}
                        />
                    )
                )}
            </nav>
        </header>
    );
}
