---
title: 5 free hosting solutions for your next project
feature_image: "/assets/blogposts/201906/free-hosting-solutions.png"
image: "/assets/blogposts/201906/free-hosting-solutions.png"
---

When [I started](https://twitter.com/feriforgacs/status/1114171850521808896) web development, there were a bunch of free options to host the sites I created. Most of them offered 200Mb of free space and a custom subdomain (It was about 15 years ago). Today, developers have much more and much better options to push their sites or web apps online, and they don't even have to pay gazillions of dollars.
I collected some of the free options I use to host my static sites.

<!-- more -->

## Netlify
I learned about Netlify just a few months ago and it almost instantly became my go-to tool for hosting static landing pages for my projects. As I use GitHub for version control, getting started with Netlify was really easy. I just had to log in with my GitHub account to Netlify, select the repository I wanted to use for my Netlify page, and a few seconds later it was ready.
GitHub is not mandatory to use Netlify, it just makes continuous deployment much easier. When you push to the selected GitHub repository, Netlify will automatically sync your pages and update the website. You can also use Netlify with GitLab, or Bitbucket.
After you deploy a website, you'll get a unique-identifier.netlify.com domain that you can start to use to share your website with the world. Of course, you have the ability to set up a custom domain name, but if you want to keep your expenses as low as possible, you can keep that subdomain.
To get started with Netlify, take a look at the [following video](https://www.youtube.com/watch?v=bjVUqvcCnxM) or head over to the [docs](https://www.netlify.com/docs/#getting-started)
To learn more about all the possibilities of the free package, take a look at the pricing page: [https://www.netlify.com/pricing/](https://www.netlify.com/pricing/)

## Heroku
I used to build a lot of Facebook Tab applications and my first experience with Heroku was because of that. Facebook added Heroku as a built-in option to host smaller applications so I gave it a try.
For me, the big advantage of Heroku is that it supports server-side scripts (like Node.js, PHP or Ruby) and it is also a great choice to host static sites. One disadvantage is that the Dyno you get with the free plan goes to sleep after 30 minutes of inactivity. This doesn't mean that after that your site won't be available again, but it would take a bit longer to display your content to the first visitor who arrives after this 30 minutes of inactivity. I came over this issue, by setting up a cron that "pings" my Heroku site every 25 minutes, so it will keep awake.
Their [addon library](https://elements.heroku.com/addons) is also a great help to add additional features to your Heroku instance.
Sadly, to use free SSL with custom domains, you should upgrade your free package but if you are ok with a something.herokuapp.com subdomain, you can save a few dollars.
Head over to the following page to get started with Heroku: [https://devcenter.heroku.com/start](https://devcenter.heroku.com/start)

## GitHub Pages
For static sites, GitHub Pages is another great option. In most cases, GitHub Pages is used to host the websites for open source projects, but with the help of [Jekyll](https://jekyllrb.com/docs/) you can also use it to create a blog. Although, it's important to notice that if you don't want to open source your website, you'll need at least a GitHub Pro account.
By default, your site will be available with a yoursite.github.io domain, and free SSL, but you have the option to [set up custom domains](https://help.github.com/en/articles/using-a-custom-domain-with-github-pages) as well.
You don't even need to know HTML and CSS to setup a site on GitHub Pages, it can generate you a site from the readme information in your repository.
To learn more and get started with GitHub Pages, visit the following page: [https://pages.github.com/](https://pages.github.com/)

## Firebase Hosting
If you can keep the size of your files under 1GB and your monthly transfer under 10GBs, Firebase Hosting is another great free solution to host your static website. With their free package, you'll also get custom domain and SSL support.
Your site doesn't even need to be fully static, as the 1GB storage of their Realtime Database, you can set up a kinda dynamic React app. To take a look at all the available services in their free package, click here: [https://firebase.google.com/pricing/](https://firebase.google.com/pricing/)
With the help of Firebase CLI deployment is as easy as a git push. You just need to wait a few minutes to get your site up and ready.
Check out this short video about how you can use Firebase Hosting to deploy your static site/web app: [https://www.youtube.com/watch?v=GzG1hqej7UQ](https://www.youtube.com/watch?v=GzG1hqej7UQ)

## Now
If you are searching for another free option to run your server-side scripts, take a look at Now. They have a huge amount of [examples to get started](https://zeit.co/examples/). Automatic deployments are also supported for [GitHub](https://zeit.co/docs/v2/integrations/now-for-github/) and [GitLab](https://zeit.co/docs/v2/integrations/now-for-gitlab/) as well. After you deploy your code, you'll get a yoursite.now.sh subdomain with free SSL. You can buy custom domains right from [ZEIT](https://zeit.co/docs/v2/domains-and-aliases/buying-a-domain/) or you can add domains you purchased at other [domain providers](https://zeit.co/docs/v2/domains-and-aliases/adding-a-domain/).
One pretty great feature of Now is that you just deploy your code and it will automatically recognize the environment you need to run your code. It's similar to how Heroku works.
Head over to their documentation page to get started Now :) [https://zeit.co/docs/](https://zeit.co/docs/)

---

Would you like to add an other provider to the list? Send me a tweet or DM to let me know ([@feriforgacs](https://twitter.com/feriforgacs)).

Btw, this site is running on Netlify, and using Jekyll as the CMS.