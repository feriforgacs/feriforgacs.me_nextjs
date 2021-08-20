import Layout from "../components/Layout";
import Avatar from "../components/Avatar";
import PostList from "../components/PostList";
import { getPostList } from "../helpers/PostHelpers";

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
	const posts = getPostList();

	return {
		props: {
			posts,
		},
	};
}
