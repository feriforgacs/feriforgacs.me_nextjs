export default function SocialShare({ url, title }) {
	const shareURL = encodeURIComponent(url);
	const shareTitle = encodeURIComponent(title);
	return (
		<div className="social-share">
			<h4>Share this post</h4>
			<div className="social-share__options">
				<a href={`https://twitter.com/intent/tweet/?url=${shareURL}&text=${shareTitle}&via=${process.env.twitter}`} target="_blank" rel="noopener noreferrer">
					Twitter
				</a>
				<a href={`https://reddit.com/submit?url=${shareURL}&title=${shareTitle}&resubmit=true`} target="_blank" rel="noopener noreferrer">
					Reddit
				</a>
				<a href={`https://news.ycombinator.com/submitlink?u=${shareURL}&t=${shareTitle}`} target="_blank" rel="noopener noreferrer">
					Hacker News
				</a>
				<a href={`https://facebook.com/sharer/sharer.php?u=${shareURL}`} target="_blank" rel="noopener noreferrer">
					Facebook
				</a>
			</div>
		</div>
	);
}
