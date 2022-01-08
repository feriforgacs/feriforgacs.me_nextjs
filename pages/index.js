import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Avatar from "../components/Avatar";
import PostList from "../components/PostList";
import { getPostList } from "../helpers/PostHelpers";

export default function Home({ posts, posts100DaysOfMaking }) {
	return (
		<Layout>
			<Meta />
			<Avatar />
			<div className="intro">
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

				<p>
					Lately I started to {`"`}tag{`"`} myself as a digital tinkerer to cover all the things I&apos;m interested in and have a basic or advanced knowledge.
				</p>

				<p>I&apos;m taking ideas from thoughts through MVPs to matured products. My main focus is on web based apps but also interested in mobile development and hardware technologies.</p>

				<p>
					To learn more about me, head over to my <Link href="/bio">bio</Link>.
				</p>

				<p>
					Currently, I&apos;m focusing on <a href="https://twis.io?ref=feriforgacs.me">twis.io</a>, a tool that people can use to create story-like experiences to grow their database.
				</p>
			</div>

			<div className="latest-posts">
				<h3>100 days of making</h3>
				<PostList posts={posts100DaysOfMaking} limit={5} />

				<Link href="/100-days-of-making">
					<a>View all posts</a>
				</Link>
			</div>

			<div className="latest-posts">
				<h3>Latest posts</h3>
				<PostList posts={posts} limit={5} />

				<Link href="/blog">
					<a>View all posts</a>
				</Link>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = getPostList();
	const posts100DaysOfMaking = getPostList("posts/100-days-of-making");

	return {
		props: {
			posts,
			posts100DaysOfMaking,
		},
	};
}
