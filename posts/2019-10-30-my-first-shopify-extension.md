---
title: My first Shopify extension
feature_image: "/assets/blogposts/201910/my-first-shopify-extension.png"
image: "/assets/blogposts/201910/my-first-shopify-extension.png"
---

Well, I can't say it was an easy ride, but it's finally here. Today my first Shopify extension went live on the app store. Here are a few things about why I built it and what I learned during the process.

<!-- more -->
With some background in ecommerce, I wanted to build a Shopify extension for a while now but after I followed their tutorial on how to build a simple app I felt that I wasn’t ready. Mainly because of the technology I had to use. It was pretty new for me (React on top of Node).

My first attempt to build an app by myself was back in August, and I gave up on the idea after about one week. I started to work on my Fixathon project at that time and I knew that I won’t be able to finish both of them in time. So I chose to go with my Fixathon project and this was the better decision.

As I used Node for that project as well, I learned a lot that I could later use to create my Shopify app.

### A few words about the app

The app is called Discount Hunt. With the help of it, Shopify store owners can run “treasure hunts” on their website. After a visitor spent enough time on the site or visited the defined amount of pages, a small gift icon becomes visible at a random position in the store. Visitors can “collect” these gifts if they provide some personal information (name, email address) in exchange. The store owner gets the collected data and the visitor gets a discount code. Everyone is happy 😄

You can learn more about the app here: [https://discounthuntapp.com/](https://discounthuntapp.com/)

### The building process

To build this app I had to use all the new things I learned this year. React for the “frontend” (Shopify Polaris), Node.js for the backend (Koa.js), MongoDB to store the collected information and Vanilla js for the store front functionalities. Of course, I could go a different way, but that looked much harder.

At the beginning I was a bit sad and angry, because I felt that after I learned the basics of express now I have to learn another framework (koa) just to build this app. But it turned out that most of the things I had to use was pretty similar to the “express way”, so that wasn’t the hard part.

What was pretty new for me and I feel it made the whole process much slower and harder is Next. I haven’t used it before and to tell you the truth, I didn’t really know what it was. There was a point (about two weeks in the making) when I felt that I should rebuild the whole thing without Next, because it just made me slower and couldn’t really see the advantages of it. And I feel the same way today. Probably this is because I made a lot of mistakes while I was getting familiar with Polaris and every time I made some changes I had to wait for Next to generate the new build. After a while this became really frustrating.

I also had some trouble finding the necessary information in the Shopify documentation, but that’s probably because I didn’t really know what to search for.

It took about 3 weeks to build the application and I spent one more week to create the necessary assets for the app store listing.

### The review process

After I submitted my app for review it took 10 days to get the first feedback. I have to say, I thought it wouldn't take that long.

I got rejected for the first time which wasn’t surprising as this was the first Shopify app I ever created. I had to make a few adjustments, and there was a misunderstanding regarding some GDPR webhooks.

I don’t know if that is above or below the average, but for me it took 18 days to get the approval for my app. I think, my app is pretty simple, so this could be more for complex applications.

The reviewer was really kind and helpful so a huge plus for that.

Of course I didn’t spend my time watching the wall while I was waiting for the results. Instead, I built the WordPress version of the app 😊 So if you are running on WordPress and looking for a great plugin to boost your pageviews and collect email addresses, follow this link: [https://gifthuntplugin.com/](https://gifthuntplugin.com/)

### What’s next

I’m sure that I’ll create a tutorial (or more) on how to build a Shopify extension and will also make a starter pack to make it easier for others to build for this platform. This will also help me to strengthen my newly acquired knowledge.

But before that, I’m focusing on user acquisition. First, I’ll go directly to Shopify store owners to get some feedback and if everything looks fine, I’ll try to find bigger communities where I can promote the application. We’ll see how it works 😊

Oh, and if you would like to try the app, head over here: [https://apps.shopify.com/discount-hunt](https://apps.shopify.com/discount-hunt)