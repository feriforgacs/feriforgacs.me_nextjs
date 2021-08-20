import PostListItem from "./PostListItem";
export default function PostList({ posts }) {
	return (
		<>
			{posts.map((post, index) => (
				<PostListItem key={index} post={post} />
			))}
		</>
	);
}
