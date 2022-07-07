export default function ScrollButton({ id, text, setSection }) {
    function scrollHandler(id) {
        setSection(id);
        const nameHeader = document.getElementById("name-header");
        if (id === "landing") {
            nameHeader.style.opacity = 0;
            // css transition set at 1s,
            // (display none after opacity change to remove elem)
            setTimeout(() => (nameHeader.style.display = "none"), 1000);
        } else {
            nameHeader.style.display = "flex";
            setTimeout(() => (nameHeader.style.opacity = 1), 500);
        }
    }

    return <button onClick={() => scrollHandler(id)}>{text}</button>;
}
