---
title: Weekly backlog 06.
feature_image: "/assets/blogposts/201912/weekly_backlog_06.png"
image: "/assets/blogposts/201912/weekly_backlog_06.png"
---

## 2019.12.09-13.

### Short summary:

-   😥 Lost a Discount Hunt customer
-   🏗️ Added extra fraud protection tools to CreativeDevJobs
-   🎉 Finally launched The Maker Report

<!-- more -->

**2019.12.09. Monday**

Today, I shut down the Facebook campaign I created to promote Gift Hunt. I think, that my target audience is not focusing on finding new tools for this Christmas season. They are probably trying to survive with the tools they already have and provide the best service until the end of the year. So by running campaigns to target them I'm just burning my money.

Instead, I started to focus on Easter. I know, it's almost 4 months until Easter, but this is enough to prepare all the assets I need to acquire new customers. I have to create articles and guides related to Easter, set up separate landing pages, etc. So I'll work on this.

During the weekend I lost one of my Discount Hunt customers. They had more than 100 hunters in their store on the first day they started the campaign. So I think they decided this way because they don't want to pay a monthly fee for a tool they use only 2 or 3 times a year. From January, I'll switch to a yearly subscription model.

**2019.12.10. Tuesday**

I got some feedback from the Braintree risk management team about the additional steps I have to make to avoid situations like the one that happened last week, so I spent at least half of the day by learning about and implementing the necessary tools.

While I was there, I also added PayPal as an additional payment option to CreativeDevJobs. Luckily, I already did it for Twis.io, so this time it wasn’t that hard.

I used the [Drop-in UI](https://developers.braintreepayments.com/guides/drop-in/overview/javascript/v3) to add Braintree to my platforms and while I was working on the adjustments, I was thinking, why aren’t these additional fraud protection tools are turned on by default? I mean, who doesn’t want to be protected as much as possible? Maybe I don’t know enough about online payments to better understand the decision behind this, or maybe I’m not using the right tool.

During afternoon I finished the landing page for [The Maker Report](https://the-maker-report.netlify.app/). I’m not happy with the copy, I'll probably make some changes tomorrow, but most of the job is done, almost ready to go.

**2019.12.11. Wednesday**

The Braintree saga continues and I’m starting to become a bit frustrated. As my account is in read-only mode if anyone would like to pay for one of my services, at the moment, they can’t.

“Luckily”, I don’t have to deal with 10 new customers every hour, but I can’t imagine how frustrating a situation like this could be for a webshop or for services with active customers. Anyway, I sent my response to them and hopefully, they’ll answer tomorrow and we can continue.

Meanwhile, I removed the inactive subscribers from the CreativeDevJobs and HashtagCalendar databases. I used to do this on a regular basis but in the past month, I forgot it. So I created a weekly notification to remind myself.

I could create some kind of automation to do the cleaning, but at this stage, I don’t think that it would be worth the time.

The afternoon was about my freelance project. It’s a PHP project and I have a feeling that I have already forgotten all the Node.js stuff I learned previously. I’ll try to do a quick node project until the end of the year to keep that part of my brain running :)

**2019.12.12. Thursday**

So yeah, this day started like yesterday, with Braintree changes. I had to implement a few more threshold rules and I hope these were the last changes I had to make.

I made some changes to the Maker Report’s Twitter profile and I also implemented [metomic](https://metomic.io/) to manage tracking codes and cookies. I don’t know why I haven’t used this tool before. I spent way too much time creating my own solution and in the end, it wasn’t that nice at all.

At the end of the day, my Braintree account got unlocked. I had to make a test transaction to see if everything is working fine, so I hope that all I have to do tomorrow is refund my test transaction :D

**2019.12.13. Friday**

Today wasn’t started with Braintree issues and fixes so I could finish the final touches of The Maker Report and “launch” it. The launch means that I tweeted about it, started to follow a couple of makers with the “official” MakerReport profile and I also posted it on Hacker News. I’d say that the Twitter launch was great with some retweets, follow backs and likes, but the feedback on Hacker News was ice cold. Let me paste here the first words of the first comment: “wow what a terrible survey.” Well, it’s never great to read something like this :D But I know that the community on HN is a bit special. I think the problem is that the words “maker” and “hacker” have different meanings based on the community you use them. And on HN, they don’t mean the same as on Indie Hackers or on Product Hunt Makers. I learned the lesson :D

I tweeted about the report at 11:43 AM and at 5 PM it had 12 responses, which is great. I’ll continue talking about it in the upcoming days on different platforms (Reddit, Indie Hackers, and Product Hunt). My goal is to reach at least 1 000 responses which sound like a loot at the moment, but I’m sure that the indie maker community is much bigger than that.

---

### Todo for next week:

-   Get 100 responses for The Maker Report
-   Lay down the basics of my yearly review
-   Implement reCAPTCHA on CreativeDevJobs
