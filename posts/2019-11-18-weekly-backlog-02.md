---
title: A bit different direction with Gift Hunt
feature_image: "/assets/blogposts/201911/weekly_backlog_02.png"
image: "/assets/blogposts/201911/weekly_backlog_02.png"
---

Short summary:
* I decided to create a free version of Gift Hunt because I think I can't reach the necessary amount of people without submitting my plugin to the WordPress plugin directory
* for the Pro version I have to offer something that users will pay for and I decided to add features that will make it possible to customize the appearance of Git Hunt
* I don't want to work on these features for more than a week, at the end of this week, I want to submit the free version to the plugin directory

<!-- more -->
__2019.11.11. Monday__

During the weekend I was trying to figure out new ways to promote my products (without ads). I was mainly focusing on Gift Hunt and Discount Hunt as those tools are most valuable during the Christmas season, so I have a few weeks to get some traction and make a few sales. It will be much harder after that. At least, this is my theory.

For Gift Hunt, I came to the point where I had to admit that probably the power of the WordPress plugin directory is something I can't ignore. My problem is that I can't remove functions from the plugin without hurting the core idea of it to make a free version. So I decided to add a few more features to it that will only be available in the pro version and I'll also try to make some limitations in the free version (not sure about these at the moment).

I made some research and it looks like most of the WordPress users really like to customize their website so the new features will focus on this topic (custom icon upload, different icon placement options, different popup layouts, etc). I don't want to spend more than a week adding these to the plugin so I try to keep the list of todos as short as possible.

Today I made a bunch of changes in the source code to make sure that it'll fit the requirements of the plugin directory and I also implemented a feature that makes it possible to upload custom icons for a Gift Hunt session. Tomorrow, I'll continue adding extra features.

Regarding Discount Hunt my idea is that sending cold emails to webshops is not the most effective way of reaching potential customers. I have to find places where I can reach a mass of them (online magazines with eCommerce focus, Facebook groups, Reddit, etc). So I'll focus on that. Probably in the second half of this week.

__2019.11.12. Tuesday__

At the beginning of the day, I received a notification email about the second install of Discount Hunt (the Shopify version of Gift Hunt) but a few seconds later the uninstall notification hit my inbox as well. This probably means that they canceled the installation process right after they arrived at the subscription step. The app is free to use for 5 days, so I don't really know why they did that. One thing that I can think about is that they taught that the subscription fee (9.99USD / month) is just too high, they won't pay that much even if the app would work form them. Who knows.

I spent the rest of the day by implementing premium features to Gift Hunt. I completed the custom icon placement and custom icon animation functions. Tomorrow I'll continue working on popup and email templates.

I'll also check out how long would it take to add a MailChimp integration to the plugin. Something that could be helpful is to instantly import the collected hunter information to another platform instead of using a manual process. MailChimp is just the first platform on my list, it would be great to add ConvertKit, Campaign Monitor and other popular tools as well. But! I don't want to work on these features for weeks. I had some experience with the MailChimp API previously, so that's why I'm starting with that.

__2019.11.13. Wednesday__

Today was about implementing premium features to Gift Hunt. Sadly, I finished only one additional feature, the popup templates. After I made the necessary changes, I realised that the admin UI is starting to become a monster. The form, to create a new session was pretty long already and with the premium features that situation got worse. So I made some changes and that took about 3 hours. The worst part is that I'm not happy with the result :D It's better but it's not great. I should break the process of creating a session to separate steps to reduce the number of visible fields on the screen, but that would take at least 3 days. That's just too much time at the moment.

Meanwhile, I sent a follow up to the WordPress related magazines I contacted previously. I wanted to know if there would be a free version of the plugin, would they review that. It turned out that some of them would probably do, so that's something I can use to get some traction. But first, I have to be ready with the free version and I have to send it to the plugin library.

Tomorrow I'll continue working on the last two premium features: success email templates and MailChimp integration. On Friday, I want to submit the plugin to the directory.

__2019.11.14. Thursday__

This day was a bit slower. I added a new function (success email templates) to Gift Hunt and made more UI changes. So nothing exciting happened.

On Saturday, I'll teach almost 30 people about the basics of WordPress, so I had to set up a test environment they'll use for their projects. I did that previously for another group but it turned out that shared hosting can't handle it when 30 WP sites are trying to install themes and plugins so I had to move. This time, I'll use a VPS. So the second half of the day was about installing the necessary OS and modules on a Digital Ocean droplet. Now it looks like that everything is ready to go, and I hope this time we won't have any issue with the performance. Fingers crossed.

__2019.11.15. Friday__

I'm not going to add the MailChimp integration to Gift Hunt yet. Instead, I started to work on the free version of the plugin. Basically, I'm just removing the additional functions from the plugin. The hard part is to manage the process when someone would like to upgrade to the pro version.

With Story View, this was easy because all the users had to do is uninstall the free version and then install the pro version of the plugin. But it's not going to work this time because the uninstall process removes all of the collected user information and the Gift Hunt sessions as well. The nicest solution would be to implement some kind of system that is working with license keys, but that would take too much time.

I ended up using a "dirty" solution. With that, you can install the pro and the free versions of the plugin to your site and they won't "hurt" each other. I just had to rename the necessary functions and database tables to do that. I'll come up with something better later, but I think it's ok this time.

And I realized that I have to update the landing page of the plugin. I'll need a section that talks about the differences between the pro and the free versions, and I'll have to create a guide to the update process ass well. But I can do this after I submitted the plugin to the WP directory.

At the end of the day, the free version of Gift Hunt is waiting for review \o/ I'm pretty sure I'll need to make some changes as this is the first plugin I submitted to the directory and the guidelines are just long enough to make me easily miss something.

___

I think this was a productive week and I reached my goal at the end of the week. The free version of Gift Hunt is ready and I submitted it to the plugin directory. I hope it won't take long to go through the review process. We'll see.

// I already got a response from the WP review team. About 3 hours after I submitted my plugin to the directory. Not sure that this happened because it's that bad or because they are working really fast :) And yes, I have to make some changes but luckily, just smaller adjustments. This is what I'm going to start the week with.