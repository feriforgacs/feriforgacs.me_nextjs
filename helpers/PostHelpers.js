import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Get the list of posts
 * @param {string} dir directory to read the posts from
 * @returns {obj} posts object
 */
export function getPostList(dir = "posts") {
	// get posts from the posts folder
	const postFiles = fs.readdirSync(path.join(dir), { withFileTypes: true }).reverse();

	// get slug and frontmatter from post
	const posts = postFiles
		.filter((dirent) => dirent.isFile())
		.map((dirent) => {
			const filename = dirent.name;
			// create slug
			const postDate = filename.substr(0, 10).split("-");
			const dateSlug = postDate.join("/");
			const postSlug = filename.substr(11, filename.length).replace(".md", "");
			const postDirectory = dir.replace("posts", "");
			const slug = `${postDirectory !== "" ? `${postDirectory}/` : ""}${dateSlug}/${postSlug}`;

			// get frontmatter
			const postWithMeta = fs.readFileSync(path.join(dir, filename), "utf-8");
			const {
				data: { title, image },
				content,
			} = matter(postWithMeta);

			// get post lead
			const lead = getPostLead(content);

			return { slug, title, lead, image, postDate };
		});

	return posts;
}

/**
 * Get post data based on post slug
 * @param {string} slug post slug
 * @param {string} dir directory to read the posts from
 * @returns {obj} post data object
 */
export function getPostData(slug, dir = "posts") {
	// get post data from file
	const file = `${slug.join("-")}.md`;
	const fileContent = fs.readFileSync(path.join(dir, file), "utf-8");
	const {
		content,
		data: { title, image },
	} = matter(fileContent);

	// get post lead
	const lead = getPostLead(content);

	const post = {
		title,
		lead,
		image,
		date: [slug[0], slug[1], slug[2]],
		content,
	};

	return post;
}

/**
 * Get post lead from the post content
 * @param {string} content post content
 * @returns {string} post lead
 */
export function getPostLead(content) {
	return content.split("<!-- more -->")[0];
}
