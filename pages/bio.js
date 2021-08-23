import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Avatar from "../components/Avatar";

export default function BioPage() {
	return (
		<Layout>
			<Meta title="About me" />
			<Avatar />
			<h1>About me</h1>

			<p>I started my career in 2007 as an ActionScript developer, then learned the basics of PHP, HTML, JS, and some server configuration stuff as well. Besides those, I also learned UI and UX design, so I could better understand the full lifecycle of a development process. With this knowledge stack, I could and can build most of the things I want to.</p>

			<p>As the head of a development team at Hungary&apos;s biggest social media agency, I had the opportunity to grow my management skills for almost 5 years.</p>

			<p>
				In 2019 I left my 9 to 5 to focus on my own{" "}
				<Link href="/2019/01/18/back-on-the-dev-train/">
					<a>ideas</a>
				</Link>
				. As I wasn&apos;t able to build something that provided financial sustainability, I started to work as a freelance developer in the middle of 2020, but I&apos;m still spending some of my time building my own products.
			</p>

			<p>
				As a freelancer, I am focusing on frontend technologies, mainly React and Next.js. These are also the tools I used to build my latest sideproject,{" "}
				<a href="https://twis.io" target="_blank" rel="noreferrer noopener">
					twis.io
				</a>
				.
			</p>

			<p>
				If you have a project for me or an idea you&apos;d like to work on together, send me an email to hello[at]feriforgacs.me or ping me on twitter{" "}
				<a href="https://twitter.com/@feriforgacs" target="_blank" rel="noopener noreferrer">
					@feriforgacs
				</a>
				.
			</p>
		</Layout>
	);
}
