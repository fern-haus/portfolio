import "../css/blog.css";
import { useEffect, useState } from "react";
import Post from "./Post";

export default function Blog() {
    const [posts, setPosts] = useState();

    useEffect(getPosts, [getPosts]);

    function getPosts() {
        fetch(`https://fern.haus/blog/wp-json/wp/v2/posts?_embed`)
            .then((data) => data.json())
            .then((json) => setPosts(json));
    }

    return (
        <div id="blog">
            <div id="posts-container">
                <div id="posts">
                    {posts ? (
                        // <pre>{JSON.stringify(posts, null, 4)}</pre>
                        posts.map((post) => (
                            <Post
                                {...{ key: post.id, post, isTitleLinked: true }}
                            />
                        ))
                    ) : (
                        <p>Loading posts...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
