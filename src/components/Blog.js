import "../css/blog.css";
import { useEffect, useState } from "react";
import { projects } from "./SelectProject";
import Post from "./Post";
import NameHeader from "./NameHeader";

export default function Blog() {
    const [posts, setPosts] = useState();

    useEffect(getAllCategories, [getAllCategories]);

    function getProjectIDsRecursiveHelper(obj, result) {
        Object.values(obj).forEach((value) =>
            value.wp_category
                ? result.push(value.wp_category)
                : getProjectIDsRecursiveHelper(value, result)
        );
    }

    function getProjectIDsRecursive() {
        const result = [];
        getProjectIDsRecursiveHelper(projects, result);
        return result;
    }

    function getAllCategories() {
        const projectCatIDs = getProjectIDsRecursive();
        fetch("https://fern.haus/blog/wp-json/wp/v2/categories")
            .then((res) => res.json())
            .then((categories) =>
                categories
                    .map((cat) => cat.id)
                    .filter((id) => !projectCatIDs.includes(id))
            )
            .then((nonProjectIDs) =>
                fetch(
                    `https://fern.haus/blog/wp-json/wp/v2/posts?categories=${nonProjectIDs.join(
                        ","
                    )}&_embed`
                )
                    .then((data) => data.json())
                    .then((json) => setPosts(json))
            );
    }

    return (
        <div id="blog">
            <NameHeader section="blog" />
            <div id="posts-container">
                <div id="posts">
                    {posts ? (
                        // <pre>{JSON.stringify(posts, null, 4)}</pre>
                        posts.map((post) => (
                            <Post {...{ key: post.id, post }} />
                        ))
                    ) : (
                        <p>Loading posts...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
