import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Get the list of posts
 * @returns {obj} posts object
 */
export function getPostList() {
	// get posts from the posts folder
	const postFiles = fs.readdirSync(path.join("posts")).reverse();

	// get slug and frontmatter from post
	const posts = postFiles.map((filename) => {
		// create slug
		const postDate = filename.substr(0, 10).split("-");
		const dateSlug = postDate.join("/");
		const postSlug = filename.substr(11, filename.length).replace(".md", "");
		const slug = `/${dateSlug}/${postSlug}`;

		// get frontmatter
		const postWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
		const {
			data: { title, image },
		} = matter(postWithMeta);

		return { slug, title, image, postDate };
	});

	return posts;
}

/**
 * Get post data based on post slug
 * @param {string} slug post slug
 * @returns {obj} post data object
 */
export function getPostData(slug) {
	// get post data from file
	const file = `${slug.join("-")}.md`;
	const fileContent = fs.readFileSync(path.join("posts", file), "utf-8");
	const {
		content,
		data: { title, image },
	} = matter(fileContent);

	const post = {
		title: title,
		image: image,
		date: [slug[0], slug[1], slug[2]],
		content: content,
	};

	return post;
}