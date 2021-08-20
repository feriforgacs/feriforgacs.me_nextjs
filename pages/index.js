import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Avatar from "../components/Avatar";
import PostList from "../components/PostList";

export default function Home({ posts }) {
	return (
		<Layout>
			<Avatar />
			<h1>
				<span role="img" aria-label="waving hand emoji">
					👋
				</span>{" "}
				Hey, it’s Feri!
			</h1>
			<p>
				<em>{"//"} pronounced like ferry</em>{" "}
				<span role="img" aria-label="smile emoji">
					😄
				</span>
			</p>

			<PostList posts={posts} />
		</Layout>
	);
}

export async function getStaticProps() {
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

	return {
		props: {
			posts,
		},
	};
}
