import "../css/blog.css";
import { useState } from "react";
import { projects } from "./SelectProject";
import Post from "./Post";

export default function Blog() {
    const [posts, setPosts] = useState();

    function getProjectIDsRecursiveHelper(value, result) {
        value.wp_category
            ? result.push(value.wp_category)
            : Object.values(value).forEach((value) =>
                  getProjectIDsRecursiveHelper(value, result)
              );
    }

    function getProjectIDsRecursive() {
        const result = [];
        Object.values(projects).forEach((value) =>
            getProjectIDsRecursiveHelper(value, result)
        );
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

    getAllCategories();

    return (
        <div id="blog">
            {posts ? (
                // <pre>{JSON.stringify(posts, null, 4)}</pre>
                posts.map((post) => <Post {...{ key: post.id, post }} />)
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    );
}
