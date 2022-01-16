import Head from "next/head";
import { useRouter } from "next/router";

export default function Meta({ title = "", description = process.env.meta.description, ogImage = process.env.meta.ogImage }) {
	const router = useRouter();
	const displayTitle = title ? `${title} - ${process.env.meta.title}` : `${process.env.meta.title}`;
	return (
		<Head>
			<title>{displayTitle}</title>
			<meta name="description" content={description} />
			{/* <meta property="og:url" content={router.pathname} /> */}
			<meta property="og:site_name" content={title} />
			<meta property="og:image" content={ogImage} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@feriforgacs" />
			<meta name="twitter:creator" content="@feriforgacs" />
		</Head>
	);
}
