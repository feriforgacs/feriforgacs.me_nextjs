import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ classNames = "", children }) {
	return (
		<>
			<Header />
			<main className={classNames}>{children}</main>
			<Footer />
		</>
	);
}
