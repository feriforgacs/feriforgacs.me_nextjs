import PostListItem from "./PostListItem";
export default function PostList({ posts, limit = 0 }) {
	return <>{posts.map((post, index) => (limit && index < limit ? <PostListItem key={index} post={post} /> : !limit && <PostListItem key={index} post={post} />))}</>;
}
