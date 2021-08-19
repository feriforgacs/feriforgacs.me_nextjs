---
title: My first desktop application
feature_image: "/assets/blogposts/201906/maker-goals-menubar.jpg"
image: "/assets/blogposts/201906/maker-goals-menubar.jpg"
---

__tl;dr__
* I decided to participate in the Product Hunt Makers Festival
* ended up building my first desktop app
* had to learn the basics of Electron, Node.js, Express, React, GraphQL, Apollo to accomplish my goal
* spent a ton of time by watching and reading tutorials just to make the basic authentication process work
* had dreams about the issues I struggled with
* finished in time and didn't lose all my hair during the process
* to manage your Maker Goals on Product Hunt right from your desktop, head over to [makergoals.netlify.app](https://makergoals.netlify.app/)

<!-- more -->

Ok, real desktop app developers would probably say that I'm a cheater because Electron is not the way real desktop apps are made. Still, if someone would ask me if I ever built something for the desktop, I would say, yes.

For those, who are not familiar with Electron, here is a short explanation: with the help of Electron, you can build cross-platform desktop applications by using web technologies. Under the hood, it's Chromium and Node.js
![Electron and Chrome](/assets/blogposts/201906/electron-chromium.jpg)

It makes it really easy to use one code base and publish your application to macOS, Windows, and Linux at the same time. If you could build a website, with the help of Electron you would probably be able to build a desktop application as well. To get started, you can read more about it on the official website: [https://electronjs.org/](https://electronjs.org/)

About 3 weeks ago I decided to [participate](https://twitter.com/feriforgacs/status/1139124114935992321) in the [Product Hunt Makers Festival - The 'API Edition'](https://www.producthunt.com/makers-festival/product-hunt-api-2-0). At first, I thought that I'll build a web app because that is what I have the most experience with. I'm not good at building fun and crazy tools so I wanted to create something useful. "Sadly", the only thing that came into my mind was a desktop app that helps makers manage their goals. Nothing else popped into my mind before the end of the registration phase, so [I went with that.](https://www.producthunt.com/@feriforgacs/goals/36096)

I knew that the hardest part would be authentication. I was familiar with the OAuth process, but on the web not on desktop. I spent almost a week to realize that I couldn't accomplish it the way I wanted.
Luckily, there was a [starter kit](https://github.com/producthunt/producthunt-api) that I could use as a base point, but it was built with React.

A few months ago I already started an [online course](https://reactforbeginners.com/) to get familiar with React but I didn't finish it and never used it with the real application before. I'm not saying that I felt this is the time to do it 😂 But I didn't really have a choice.
I still had 2 weeks before the end of the submission period so I started to re-watch the episodes. Thanks to the great explanations in them, after a few hours I felt that now I understand why the starter kit looks as it is and what are the first steps I should make.
About 5 days later I was ready with the inside and outside ugly, buggy MVP. During these days I had a few nights when I dreamed about props and states and routes, but at least I could sleep 😄

I knew that I had to refactor the whole codebase to not go crazy if I want to change something, so I spent a few hours on that too.
At that point, I was ready with a web app, which wasn't even close to the one I had in my head when I started to build the app. I thought that wrapping it "around" Electron will be easy after my fights with React, but of course, I was wrong.

I had a nice list of stories about the functions I wanted to add to the app and to accomplish that, I had to solve the communication between the React app and Electron. I was naive when I thought it's just "import { shell } from 'electron'", that would be easy 😄
Long story short, I spent 2 more days to find out how to open the default browser if someone clicks on a link inside the Electron app.

As creating the basic functions didn't happen as I planned I ran out of time to add the extra features that were on my todo list.
Anyway, I'm still happy with the result and I hope others will like it and will use it too.

So if you are looking for a tool to manage your Maker Goals on Product Hunt right from your desktop, head over to [makergoals.netlify.app](https://makergoals.netlify.app/) and download Maker Goals Menubar (for macOS) today.

Windows version will be available as soon as I figure out why the current package crashes on install. So probably a week or so 😄 Stay tuned!