import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
	return (
		<Layout>
			<Meta title="Projects" />

			<h1>Projects</h1>
			<h2>Projects I’m working on or shipped already</h2>

			<ProjectCard projectName="Smart Notification Bar" projectURL="https://smartnotificationbar.com/" projectImage="smartnotificationbar/smartnotificationbar.gif" projectDateOfLaunch="2020.06." projectStatus="🟢 Active">
				<p>Smart Notification Bar can help you to easily target your visitors with the best message to drive more sales and grow engagement.</p>
				<p>Display a message to visitors who came from Facebook, Google, an email campaign, an ad campaign, and much more.</p>
			</ProjectCard>

			<ProjectCard projectName="The Maker Report" projectURL="https://themakerreport.com/" projectImage="makerreport/makerreport.gif" projectDateOfLaunch="2020.02." projectStatus="🧟 Zombie">
				<p>The Maker Report conducts a survey every year to learn more about the maker community. The first study was completed by the beginning of 2020 and gives a snapshot of their year 2019.</p>
			</ProjectCard>

			<ProjectCard projectName="Discount Hunt for Shopify" projectURL="https://discounthuntapp.com/" projectImage="discounthunt/discounthunt-icon.png" projectDateOfLaunch="2019.10." projectStatus="🟢 Active">
				<p>With the help of Discount Hunt you can drive more traffic to your Shopify store, increase the time visitors spend on your site, grow the database of your potential customers and drive more sales.</p>
				<Link href="/2019/10/30/my-first-shopify-extension">
					<a>Learn more about the project</a>
				</Link>
			</ProjectCard>

			<ProjectCard projectName="Gift Hunt for WordPress" projectURL="https://gifthuntplugin.com/" projectImage="gifthunt/gifthunt-icon.gif" projectDateOfLaunch="2019.10." projectStatus="🟢 Active">
				<p>Online Treasure Hunt on your WordPress site.</p>
			</ProjectCard>

			<ProjectCard projectName="Re-Product" projectImage="reproduct/re-product-icon.png" projectDateOfLaunch="2019.08." projectStatus="☠️ Shut down">
				<p>Re-Product is an online market where you can trade with your used or new stuff without involving real money to the process.</p>
				<Link href="/2019/09/05/re-product-an-online-market-for-your-trash">
					<a>Learn more about the project</a>
				</Link>
			</ProjectCard>

			<ProjectCard projectName="Maker Goals Menubar" projectURL="https://makergoals.netlify.app/" projectImage="maker-goals-menubar/maker_goals_menubar_icon.gif" projectDateOfLaunch="2019.06." projectStatus="🧟 Zombie">
				<p>With the help of Maker Goals Menubar, you can easily manage your goals on Product Hunt from the menubar of your Mac.</p>
				<Link href="/2019/06/17/my-first-desktop-application">
					<a>Learn more about the project</a>
				</Link>
			</ProjectCard>

			<ProjectCard projectName="Story View for WordPress" projectURL="https://storyviewplugin.com/" projectImage="storyview/storyview-icon.gif" projectDateOfLaunch="2019.05." projectStatus="☠️ Shutdown">
				<p>Story View is a WordPress plugin that you can use to create story-like versions of your posts.</p>
				<Link href="/2019/06/14/from-avengers-endgame-to-my-first-successful-product">
					<a>Learn more about the project</a>
				</Link>
			</ProjectCard>

			<ProjectCard projectName="TWiS - The winner is" projectURL="https://twis.io/" projectImage="twis/twis-icon.gif" projectDateOfLaunch="2019.05." projectStatus="🛋️ Pivot">
				<p>You can use TWiS.io to select random winners from Instagram comments or mentions in your Business profiles.</p>
				<Link href="/2019/05/14/and-the-winner-is">
					<a>Learn more about the project</a>
				</Link>
			</ProjectCard>

			<ProjectCard projectName="CreativeDEVjobs" projectImage="creativedevjobs/creativedevjobs-thumbnail.png" projectDateOfLaunch="2019.05." projectStatus="☠️ Shutdown">
				<p>CretiveDEVjobs came to life to become the number one job listing site for developers with a creative mind.</p>
				<p>I believe that there are a huge amount of developers who like to use not just the algorithmical but also the creative part of their brain.</p>
				<Link href="/2019/05/09/a-special-kind-of-developer-the-creative-one">
					<a>Learn more about the project</a>
				</Link>
			</ProjectCard>

			<ProjectCard projectName="HashtagCalendar" projectImage="hashtagcalendar/hashtagcalendar-icon.gif" projectDateOfLaunch="2019.01." projectStatus="☠️ Shutdown">
				<p>The main purpose of HashtagCalendar is to provide some inspiration for small businesses or individuals when they want to create some content on Instagram but have no idea what that should be about.</p>
				<p>HashtagCalendar provides daily and holiday hashtag suggestions with a short description and other suggested hashtags.</p>
			</ProjectCard>
		</Layout>
	);
}
