import { getPostList } from "../../helpers/PostHelpers";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import PostList from "../../components/PostList";

export default function IndexPage100DaysOfMaking({ posts }) {
	return (
		<Layout>
			<Meta title="100 days of making" description="My journey of building a Saas for 100 days" />
			<h1>100 days of making</h1>
			<PostList posts={posts} />
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = getPostList("posts/100-days-of-making");
	return {
		props: {
			posts,
		},
	};
}
