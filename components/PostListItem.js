import { format } from "date-fns";
import Link from "next/link";

export default function PostListItem({ post }) {
	return (
		<div className="post-list-item">
			<h4 className="post-list-item__title">
				<Link href={post.slug}>
					<a>{post.title}</a>
				</Link>
			</h4>
			<p className="post-list-item__date">{format(new Date(post.postDate), "dd MMMM y")}</p>
		</div>
	);
}
