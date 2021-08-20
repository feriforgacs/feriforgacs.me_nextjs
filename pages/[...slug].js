import { format } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import path from "path";
import { getPostData } from "../helpers/PostHelpers";
import Layout from "../components/Layout";

export default function PostPage({ post }) {
	return (
		<Layout classNames="post-page">
			<div className="post">
				<div className="post__body">
					<h1 className="post__title">{post.title}</h1>
					<p className="post__date">{format(new Date(post.date), "dd MMMM y")}</p>
					<div className="post__content" dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));
	const paths = files.map((filename) => {
		const postDate = filename.substr(0, 10).split("-");
		const postSlug = filename.substr(11, filename.length).replace(".md", "");

		return {
			params: {
				slug: [...postDate, postSlug],
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const post = getPostData(slug);

	return {
		props: {
			post,
		},
	};
}
