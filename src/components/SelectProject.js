const projects = {
    Home: {
        project_url: null,
        wp_category: 66,
        github_url: "https://github.com/fern-haus/portfolio",
    },
    "Multi-Page Sites": {
        "Prova Lab": {
            project_url: "https://provalabsocialinnovation.com",
            wp_category: undefined,
            github_url: "https://github.com/fern-haus/prova-lab",
        },
        "The Hungry Ghost": {
            project_url: "https://fern.haus/blog",
            wp_category: undefined,
            github_url: "https://github.com/fern-haus/hungry-ghost",
        },
        "Ascend Tree Service": {
            project_url: "https://fern.haus/projects/ascend",
            wp_category: undefined,
            // move to fern-haus
            github_url: "https://github.com/alecjf/ascend",
        },
    },
    "Single Page Apps": {
        "Dharma Gem": {
            project_url: "https://fern.haus/gem",
            wp_category: 65,
            github_url: "https://github.com/fern-haus/dharma-gem",
        },
        "Arcana Database": {
            project_url: "https://fern.haus/arcana",
            wp_category: undefined,
            github_url: "https://github.com/fern-haus/arcana-database",
        },
        "Mushroom Finder": {
            project_url: "https://fern.haus/mushroom",
            wp_category: undefined,
            github_url: "https://github.com/fern-haus/mushroom-finder",
        },
        "Workout Timer": {
            project_url: "https://fern.haus/projects/workout",
            wp_category: undefined,
            // move to fern-haus
            github_url: "https://github.com/alecjf/workout-timer",
        },
    },
};

// add data to projects object
function getAllDocumentation(projects) {
    const values = [
        projects["Home"],
        ...Object.values(projects)
            .slice(1)
            .map((v) => Object.values(v)),
    ].flat();
    values.forEach((value) => {
        // get posts:
        fetchHelper(
            "https://fern.haus/blog/wp-json/wp/v2/posts?categories=" +
                value.wp_category +
                "&_embed"
        )
            .then((data) => (value.documentation = data))
            .catch((err) => (value.documentation = { error: err.message }));
        // get description:
        fetchHelper(
            "https://fern.haus/blog/wp-json/wp/v2/categories?include=" +
                value.wp_category
        )
            .then((data) => (value.description = data?.[0]?.description))
            .catch((err) => (value.description = { error: err.message }));
    });
}

function fetchHelper(url) {
    return fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            if (data.message) {
                throw new Error(data.message);
            } else {
                return data;
            }
        });
}

getAllDocumentation(projects);

export default function SelectProject({ project, setProject }) {
    return (
        <select
            id="select-project"
            defaultValue={project}
            onChange={(e) => setProject(e.target.value)}
        >
            <option value="Home">Home</option>
            {Object.keys(projects)
                .slice(1)
                .map((projectType) => (
                    <optgroup key={projectType} label={projectType}>
                        {Object.keys(projects[projectType]).map(
                            (projectName) => (
                                <option key={projectName} value={projectName}>
                                    {projectName}
                                </option>
                            )
                        )}
                    </optgroup>
                ))}
        </select>
    );
}

export { projects };
