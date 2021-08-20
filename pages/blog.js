import { getPostList } from "../helpers/PostHelpers";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PostList from "../components/PostList";

export default function BlogPage({ posts }) {
	return (
		<Layout>
			<Meta title="Blog" description="Short posts about my thoughts, ideas and the projects I’m working on" />
			<h1>Posts</h1>
			<PostList posts={posts} />
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = getPostList();
	return {
		props: {
			posts,
		},
	};
}
