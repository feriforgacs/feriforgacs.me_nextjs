import marked from "marked";
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
			<div className="post-list-item__lead" dangerouslySetInnerHTML={{ __html: marked(post.lead) }} />
			<p className="post-list-item__date">{format(new Date(post.postDate), "dd MMMM y")}</p>
		</div>
	);
}
