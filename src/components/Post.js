import "../css/post.css";
import { useState } from "react";

const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

function dateFormatter(str) {
    const date = new Date(str),
        m = date.getMonth(),
        d = date.getDate(),
        y = date.getFullYear(),
        h = date.getHours(),
        min = date.getMinutes();
    return `${months[m]} ${d}, ${y} @ ${h}:${min}`;
}

export default function Post({ post }) {
    const [isExpanded, setIsExpanded] = useState(false),
        image = post?._embedded?.["wp:featuredmedia"]?.["0"];

    function readMoreHandler(post) {
        const elem = document.getElementById(post.id);
        elem.style.height = isExpanded ? "300px" : "fit-content";
        setIsExpanded((isExpanded) => !isExpanded);
    }

    return (
        <div className="post-container">
            <article className="post" id={post.id}>
                <a href={post.link} target="_blank" rel="noreferrer">
                    <h3>{post.title.rendered}</h3>
                </a>
                <p>{dateFormatter(post.date)}</p>
                {image && (
                    <div className="image-box">
                        <a
                            href={image.source_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="featured-image"
                                src={image.source_url}
                                alt={image.alt_text}
                            />
                        </a>
                        <div
                            className="caption"
                            dangerouslySetInnerHTML={{
                                __html: image.caption.rendered,
                            }}
                        ></div>
                    </div>
                )}
                <div
                    dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                    }}
                />
            </article>
            <div
                className={`read-more-button-wrapper ${
                    isExpanded ? "open" : "closed"
                }`}
            >
                <button
                    className="button-link"
                    onClick={() => readMoreHandler(post)}
                >
                    {isExpanded ? "close" : "read more"}
                </button>
            </div>
        </div>
    );
}
