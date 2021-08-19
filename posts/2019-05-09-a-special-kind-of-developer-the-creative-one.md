---
title: A special kind of developer, the creative one
feature_image: "/assets/blogposts/201905/creative-developer.png"
image: "/assets/blogposts/201905/creative-developer.png"
---

Are you one of those developers who likes to play around with animations, new tech, VR and all kind of other stuff that needs developer skills but also some kind of creativity? Maybe you are one of those special kind of developers.

<!-- more -->

I like to think myself as a creative developer too. I enjoy frontend and backend dev but I also like to tweak around with design and animations. Some day it would be great to try some hardware stuff as well. If I'd have to do only one of these, I'd get bored. And I think, I'm not alone with this.

I'm launching [CreativeDEVjobs](https://creativedevjobs.com) because I think most of the job listing sites that are focusing on developers are looking for the specialized ones (heavy backend, all frontend, Swift, Kotlin, etc) and not for the kind of people I'm talking about above.

CretiveDEVjobs came to life to become the number one job listing site for developers with a creative mind.
I believe that there are a huge amount of developers who like to use not just the algorithmical but also the creative part of their brain.
There are certain parts in technology that couldn't came to life without creativity. And there are developers who can't create without adding their own creative ideas to the product they are building.

The current version of the site is just an MVP (built in 2 weeks while I was [waiting for the result](https://feriforgacs.me/2019/05/08/my-most-productive-four-month-with-the-least-results/) of a review) where you can find the latest positions, filter by company, location, job type and experience level. There is also a possibility to subscribe to daily, weekly or monthly position alerts.

The business model follows the basic job board model however posting a job is free for now as I want to collect more creative developer positions.

## The tech stack
The site was built with PHP (CodeIgniter), the database is MariaDB and it's running on a Linode VPS.
Speed and simplicity was important, so I was trying to avoid huge JS frameworks and fancy images. This is my second project where I used vanilla JS instead of jQuery. For the WYSIWYG editor I used [Quill](https://quilljs.com/), the payment is handled by [Braintree](https://www.braintreepayments.com/) with the help of their [Drop-in UI](https://developers.braintreepayments.com/guides/drop-in/overview/javascript/v2).
I also had the opportunity to try the [Google Job Posting API](https://developers.google.com/search/docs/data-types/job-posting).
For better performance I would like to implement [AMP](https://developers.google.com/amp/) as well in the near future.
I think SEO is also really important for these kind of sites, so I'll try to enhance that as well.

## What's next?
I think niche job boards works best if there is a great community next to them. So, I'll try to create some kind of platform, community where creative developers can share their work, ideas, struggles and can help each other. If there is already something like this, please let me know :) Maybe I had to start with this 😄 But 2 weeks is not enough for that.

If you are a creative developer, you can take a look at the [latest positons here](https://creativedevjobs.com/).

If you are looking for a creative developer, you can [post a job here](https://creativedevjobs.com/hire-a-creative-developer).

---

<small>_[Header image by Amy Shamblen](https://unsplash.com/photos/BV8Ka-JE0Cs)_</small>
