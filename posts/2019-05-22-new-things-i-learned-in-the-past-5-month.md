---
title: New things I learned in the past 5 months
feature_image: "/assets/blogposts/201905/new-things-i-learned.jpg"
image: "/assets/blogposts/201905/new-things-i-learned.jpg"
---

When I started the "maker life" at the beginning of this year one of my goals was to try at least one new technology with every product I build. This is a summary of the things I learned while building 5 tools in the past 5 months.

<!-- more -->

## Vanilla JavaScript
I was a heavy jQuery user and I have to admit that sometimes I still use it in cases where it isn't really necessary. Thanks to the free [JavaScript 30 course](https://javascript30.com/) by Wes Bos the number of these occasions is decreasing.
This course was on my list for a really long time. Basically, I started it right after it became available, but after a few lectures, I've always found something more important to do. But not this time. In 3 days I went through all the videos and I was trying to use all the things I learned while building the [HashtagCalendar](https://thehashtagcalendar.com/)
In the end, I felt like I should rewrite the whole thing as my main.js became a mess 😄 But this is a task for another day.

## Docker
For years, my goto setup for PHP development was [WAMP/MAMP](https://www.mamp.info/en/). Even though I knew about the weaknesses of this solution, every time I was trying to switch to something else I had some difficulties and gave up after a few hours. There were deadlines I had to keep in mind, I couldn't spend much time just by setting up the dev environment.
As my second project was built with PHP I felt that this could be the time to make the switch. I spent at least 3 whole days to find the right setup for my needs and I have to tell you, I felt more than once that "f*ck this sh*t, I'm going back to MAMP". I was facing a database connection problem for 2 days and I just couldn't find out what went wrong. Well, it turned out that that it was me 😄 I misspelled two variables in my PHP code...
But finally, I'm up and running with Docker. I also see how it could be a huge help for bigger teams, but for someone who just getting familiar with PHP development, I still think WAMP/MAMP is fine and much easier to set up.

## Google Sheets API
As I worked with third-party APIs previously, this wasn't a completely new thing, but I never used the Google Sheets API before. The implementation wasn't the hard part (although I felt that the documentation wasn't as detailed as it could be), getting through the review process was really [time-consuming](https://feriforgacs.me/2019/05/08/my-most-productive-four-month-with-the-least-results/). Basically, I had to wait 2 months for the final approval. This is something I'll remember next time I want to build something on top of a Google API.

## Google Jobs search API
Luckily, I could use the [Jobs search API](https://cloud.google.com/talent-solution/job-search/docs/basics) without a review process, so I implemented it on [CreativeDEVjobs.com](https://creativedevjobs.com/). For the first time, I had some trouble getting through the documentation, but after a few searches and tests, I found the right combination.
This could be really useful to anyone who is building a job listing site.

## AMP
Although I was familiar with the base concept of [AMP](https://amp.dev/), and I implemented it to WordPress sites previously, with the help of a plugin, I never developed an AMP site by myself before. Speed is something I keep in mind every time I build a product, for CreativeDEVjobs.com it's more important as I think most of the visitors of the site will come from search. So the time has come to give it a go.
Implementing it on a simple site seems easy after you get familiar with the basic rules, and the tools like [AMP validator for Chrome](https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc?hl=en) will also help you identify most of the problems. For me, it took about 3 hours to create the AMP ready version of the positions pages at CreativeDEVjobs.com.

## VPS
Most of the tools I built previously were running on shared hosting or on a dedicated server managed by a hosting company. As I started to build my own services, I felt that it would be great if I could also manage the environment these tools are running on. I had some experiences with DigitalOcean before, but this time I went with Linode as most of the reviews I found said, that their service was better. They provide a really great setup guide. With the help of that, everyone who typed cd .. in the terminal before would be able to set up a VPS server by themselves. I don't say they should, but it's possible 😄

## React
As everyone is really into it, I felt the pressure to start learning React and React Native as well. I haven't used it with any of my products yet, but at least now I understand the basics of it.
After my great experience with JavaScript 30, I turned to Wes Bos with this one as well, I started his [React For Beginners course](https://reactforbeginners.com/) (haven't finished yet).

The next thing on my list is GraphQL because I want to participate in the next [Makers Festival](https://www.producthunt.com/makers-festival/product-hunt-api-2-0). I still have a few weeks to learn that 😄

Although I feel I could learn much more, I should also keep in mind that my goal is not to update my dev skills to find a great developer position but to build products that will [generate revenue.](https://feriforgacs.me/2019/01/18/back-on-the-dev-train/) And I'm pretty sure that most of the customers won't care if it's built with React or jQuery or COBOL while it works fine, easy to use and solves their problems.

---

<small>_[Header image by Charles](https://unsplash.com/photos/pjAH2Ax4uWk)_</small>
