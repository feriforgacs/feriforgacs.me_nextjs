import Head from "next/head";
import { useRouter } from "next/router";

export default function Meta({ title = "", description = process.env.meta.description, ogImage = process.env.meta.ogImage }) {
	const router = useRouter();
	return (
		<Head>
			<title>{`${title} - ${process.env.meta.title}`}</title>
			<meta name="description" content={description} />
			<meta property="og:url" content={router.pathname} />
			<meta property="og:site_name" content={title} />
			<meta property="og:image" content={ogImage} />
		</Head>
	);
}
