---
title: Weekly backlog 05.
feature_image: "/assets/blogposts/201912/weekly_backlog_05.png"
image: "/assets/blogposts/201912/weekly_backlog_05.png"
---

## 2019.12.02-06.

### Short summary:

-   📝 I started to collect and upload positions to CreativeDevJobs
-   🏗️ Made a few adjustments on the Gift Hunt, Discount Hunt and Story View landing pages
-   🥳 The guest post about Gift Hunt went live
-   🐞 Found a bug in CreativeDevJobs and someone used the job posting process to test stolen card information

<!-- more -->

**2019.12.02. Monday**

During the weekend I was lurking around in the Google Search console and I took a look at the stats of CeativeDevJobs.com. Based on that, I think I gave up too soon to drive more traffic to the site from search. My tactic was to search for open positions at creative or digital agencies and post them on creativedevjobs. I thought it wasn’t really effective but based on the info in search console, it started to take off after a few months. Sadly, that was the point when I gave up and stopped uploading new positions regularly. Until now. I’m returning to this and I’ll monitor the results on a weekly basis.

I’ve made a few changes on the landing page of Gift Hunt. I’ve added a countdown timer so visitors will know that the offer they can get is limited and I removed the CTA from the hero section that points to the free version of the plugin. If someone is looking for the free version, they can find it easily, they just have to scroll down a bit. I removed the button because it was next to the primary CTA and made it less prominent.

I’ve restarted the Facebook Ad campaign I created previously. This time, instead of using a video and the homepage as the landing, I’m going with a simple image and a separate landing page. After a few hours, the CPC looks better than previously (1.67USD / click previously, 0.62USD / click now) and I hope it’ll stay like this or becomes better. I’ll see more tomorrow.

**2019.12.03. Tuesday**

I started the day by collecting and uploading new positions to CreativeDevJobs and I also created a Google Alert for specific words (related to creative tech jobs) I hope this will make it easier to find new jobs I can share on the site. At the moment, I’m looking up the career pages of creative and digital agencies and that’s where I try to find creative tech jobs.

I added the “offer countdown” to the landing page of Story View as well, and I removed the CTA from the hero section that points to the free version of the plugin. Now the main CTA and the countdown are the dominant elements in that section.

In the afternoon I finished working on the basics of The Maker Report, which is the “secret” side project I mentioned previously. It’s a survey to learn more about the maker community. I wanted to soft launch it today, but I didn’t finish all the necessary things on time.

Btw, I wanted to use Typeform for the survey but I had to pay 45EUR for a month which is a lot at the moment, so I switched to plain Google Forms instead. It’s not that fancy but will do the job I need it for.

**2019.12.04. Wednesday**

I woke up with a Christmas spirit so I decided to give away some free copies of my plugins. I reached out to a user who previously asked about Story View on Product Hunt and I’ll get in touch with some of the Story View customers and I’ll give them a free copy of Gift Hunt Pro.

The guest post about Gift Hunt is live \o/ I’m not assuming a huge number of visitors from it immediately, but I hope it will help to drive more visitors to the site from search results.

The Facebook ad for Gift Hunt is still running, the CPC got better (at the moment it’s 0.26USD / click) and the Facebook page got some views so I made some changes to it. I posted the article to the feed, I uploaded a cover and added some description to it. I didn’t spend to much time on this previously because I created the Facebook page only to be able to run ads. But it turned out that people are visiting this page as well, so it can’t be blank.

I spent the rest of the day working on my freelance projects.

**2019.12.05. Thursday**

Today was a bit slower. In the middle of the day, I had to go out to pick up a package and I also took another quick trip to the office where I worked previously. My old PC was still there, and I want to sell that as well, so I grabbed it and now it’s sitting next to me (under my desk). I still have to remove all the files from it and reinstall the operating system, but first, I need to find a keyboard and a mouse to do that :D

I’ll try to sell two old laptops as well, I already made the necessary “cleaning” on those. One of them is more than 10 years old but it’s still in pretty good shape. I wonder how my current machine (mid 2014 retina MacBook Pro) would look like after 10 years. Although I’m really gentle with all of my stuff, so I think it’ll look just fine.

Besides these, I worked on the maker report. I made some changes to the questions and added a few more. At the moment it’s 30 questions (some of them are just regular ones) and I don’t want to make it any longer. I hope that I can publish it at least during the weekend. Tomorrow, I’ll work on the landing page of the report and I’ll prepare the social assets.

**2019.12.06. Friday**

Yesterday night someone “spammed” CreativeDevJobs and that lighted a bug in the system. The database query for the daily job alert seems to be wrong and as a result of that, the spam jobs were part of the daily notification mail. First, I wasn’t nervous because I thought that I am the only one who subscribed to the daily notifications but it turned out that I was wrong. I have more than 20 daily notification subscribers. Well, that’s not 2 000 but still, yikes.

I discovered another issue, the links in the notification emails didn’t work. When I found this out, I was like, “what the hell?” because I remember I tested this feature and everything was ok with it. I haven’t changed anything in this part of the application since I launched it. So at the moment, I have no idea what happened.

Debugging these issues took about 3 hours, I started to work on what I wanted to only after this.

By the end of the day, it turned out that this wasn’t a classic spam posting. Someone used the job posting process to test a bunch of (probably stolen) credit card information with it. This generated almost 600 transactions (so almost 600 credit cards were tested) and 2 of them were successful.

The strange (and sad) thing is that I didn’t notice anything from it. My Braintree account got suspended and I received an email from their risk management team about the issue. That’s when I learned about the issue.

I have to take a closer look about the possible solutions to avoid these situations.

---

### Todo for next week:

-   (from last week) launch The Maker Report
-   focus on Easter season with Discount Hunt and Gift Hunt
-   add extra security layer to CreativeDevJobs
