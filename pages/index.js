import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Avatar from "../components/Avatar";
import PostList from "../components/PostList";
import { getPostList } from "../helpers/PostHelpers";

export default function Home({ posts }) {
	return (
		<Layout>
			<Meta />
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

			<p>I’m a designer, developer, mostly focusing on web things but open-minded to mobile development and hardware technologies as well. One day it would be great if I could learn to bake all kinds of pastry too 😅</p>

			<p>I have more than 12 years of experience in web development. I started as an ActionScript developer, then learned the basics of PHP, HTML, JS, and some server configuration stuff as well. With this knowledge stack, I could build most of the things I wanted to.</p>

			<p>In the past 5 years I had the opportunity to grow my management skills, as the head of development team at the biggest social media agency in Hungary.</p>

			<p>To fulfill my dreams about the bakery stuff (kidding), in January 2019 I left my 9 to 5 job and jumped back on the dev train. Now I build products to solve my own (and hopefully others’) problems.</p>

			<p>
				My social network of choice is Twitter (
				<a href="https://twitter.com/@feriforgacs" target="_blank" rel="noopener noreferrer">
					@feriforgacs
				</a>
				) but in most cases I’m on a read only mode. I’ll try to share my progress more often there 🤞, so if you are interested, feel free to follow me. For more detailed information about my thoughts, ideas and the projects I’m working on you can take a look at my blog posts.
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
