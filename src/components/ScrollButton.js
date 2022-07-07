export default function ScrollButton({ id, text }) {
    function scrollHandler(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        document.getElementById("malachite").style.position =
            id === "home" ? "absolute" : "fixed";
    }

    return <button onClick={() => scrollHandler(id)}>{text}</button>;
}
