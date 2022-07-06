export default function ScrollButton({ id, text }) {
    function scrollHandler(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    return <button onClick={() => scrollHandler(id)}>{text}</button>;
}
