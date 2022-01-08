import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>

					<li>
						<Link href="/100-days-of-making">
							<a>100 days of making</a>
						</Link>
					</li>

					<li>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</li>

					<li>
						<Link href="/bio">
							<a>Bio</a>
						</Link>
					</li>

					<li>
						<Link href="/projects">
							<a>Projects</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
