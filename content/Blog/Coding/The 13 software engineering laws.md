---
title: "The 13 software engineering laws"
source: "https://newsletter.manager.dev/p/the-13-software-engineering-laws?ref=dailydev"
author:
  - "[[Anton Zaides]]"
published: 2024-11-12
created: 2025-04-03
description: "Hyrum's law, Conway’s law, Zawinski's law, and 10 others."
tags:
  - "clippings"
---
### Hyrum's law, Conway’s law, Zawinski's law, and 10 others.

Some of those are famous, and some are quite niche. ALL of them are super useful to engineers and managers.

Curious to know how many were new to you:

1. Parkinson’s law
2. Hofstadter’s law
3. Brooks’ law
4. Conway’s law (and the Inverse Conway's law)
5. Cunningham’s law
6. Sturgeon’s law
7. Zawinski’s law
8. Hyrum’s law
9. Price’s law
10. The Ringelmann effect
11. Goodhart’s law
12. Gilb’s law
13. Murphy’s law

For each, I’ll share:

- The law
- A relevant comic (if I found one)
- Why does it matter to engineering managers

Let’s go.

## 1\. Parkinson’s law

> *Work expands to fill the available time.*

This is a famous one, that is used to justify fake (and sometimes unreasonable) deadlines.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F97396cba-be92-448e-9123-57e682951142_598x202.png)

[Source](https://es.pinterest.com/pin/432838214164169599/?send=true)

#### Why it matters

We covered it in depth in ’s [great guest post](https://zaidesanton.substack.com/p/using-fake-deadlines-without-driving). By setting deadlines, you will probably get better results. It's all about playing with the Iron Triangle of scope, resources, and time.

Like any law, this one can be abused. Hofstadter’s law is a great counterbalance:

## 2\. Hofstadter’s Law

> *It always takes longer than you expect, even when you take into account Hofstadter’s Law.*

Software projects are almost always late, even when you factor in buffer time. So if you use Parkinson’s law to justify short deadlines, you’ll either:

- Completely burn out your team
- Always be late

![Estimating Time](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdef8c677-711e-4e69-916f-7c3000640ad6_607x278.png)

Source: [xkcd](https://m.xkcd.com/1658/)

#### Why it matters

Those two laws cover everything you need to know about why estimation in software is so hard. Take endless buffers - you’ll waste time on meaningless work. Too short buffers - you’ll be late.

No quick way around it - just tons of practice and communication:) (and having a negotiable scope)

## 3\. Brooks’ law

> *Adding manpower to a late software project makes it later.*

The famous saying is “9 women can’t make a baby in a month.”

![The Mythical Man-Month Is Not A Myth | HI, I'M CHRIS CHAN](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F33992f3d-a2df-461e-9d5a-76ec0e26d86a_560x174.gif)

[Source](https://chrischan.com.au/2010/05/18/the-mythical-man-month-is-not-a-myth/)

Every EM under pressure knows this feeling, when a higher-up says: “This is super urgent, you can get any people you need from other teams”. Right… Or just stop bothering me and let us work 🙃

#### Why it matters

You cannot be an engineering manager without being a part of a late project (see the 2 laws above).

Most EMs don’t fully grasp this law. They think the reality is more similar to the **Ringelmann Effect** (which we’ll cover in a sec)**.** So let’s say you have 4 people on a late project, and you are offered 2 more senior engineers. You know that it won’t add 50% productivity, but you think you will for sure go at least a 5-10% faster.

Too often, the reality is you will go SLOWER!

*(Depending of course on many variables. Like every law here, it has its limits).*

## 4\. Conway’s law

> *Organizations produce designs which are copies of the communication structures of these organizations.*

For example, A SaaS company has separate frontend and backend teams. Because these teams operate separately, their **communication structure** affects the **product architecture**:

- The **frontend team** builds a UI that expects data in a certain format.
- The **backend team** builds APIs based on their own assumptions.
- The API responses don’t match exactly what the frontend expects, requiring extra transformations.
- Over time, the SaaS app ends up with **extra layers of glue code and inefficiencies** because the teams didn’t collaborate closely.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff35f223b-9795-4a9b-98ee-7a0405b3a13d_852x764.png)

[Source](https://www.comicagile.net/comic/conways-law/)

#### Why it matters

You can [Inverse Conway’s law](https://www.thoughtworks.com/en-gb/radar/techniques/inverse-conway-maneuver) to your advantage.

[A great example is what Flo did](https://zaidesanton.substack.com/p/being-an-engineering-manager-at-flo): they struggled with 3-week app store release cycles for their mobile app. So they put in each team just one iOS and one Android engineer, and 2-4 backend engineers. By pushing more functionality to the backend, **they can release 20-30 times per day** instead of every few weeks.

## 5\. Cunningham’s law

> *The best way to get the right answer on the internet is not to ask a question, but to post the wrong answer.*

People love correcting others:

![Duty Calls](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c0285e9-4b53-4e68-8e7a-a6c34805b7b3_300x330.png)

[Source](https://xkcd.com/386/)

#### Why it matters

In [6 secrets for never being blocked again](https://zaidesanton.substack.com/p/6-secrets-for-never-being-blocked) we covered how can you use this to unstuck yourself:

Instead of submitting a request to the DevOps team, waiting for them to prioritize it, and eventually getting it done, simply open a Pull-Request to do it yourself. **Even if you have no idea what you are doing.** Look at the merged PRs, find a similar one, and try your best.

This does a number of things:

1. The DevOps team will see your PR and say “wtf is this?”
2. They’ll reply quickly on the PR with what needs to be fixed
3. You’ll have better knowledge of what to do next time
4. The DevOps team will gradually standardize this process with automation and policies

## 6\. Sturgeon’s Law

> *90% of everything is crap.*

Like the 80/20 Pareto, but on steroids. Whether it's code, ideas, or features, most things suck.

![Step off the hamster wheel with Agile and Sturgeon's Law](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdad57330-74e8-4709-bf59-7d707e02f57e_500x333.png)

[Source](https://monthlymethod.com/sturgeons-law/)

#### Why it matters

Most of the features you release will be useless, and a small percentage will be the core product of your company. [When people talk about the 10x (or 100x) engineer](https://newsletter.rafapaez.com/p/the-rise-of-the-100x-product-engineer), it’s not engineers who create 10x more code - but those who create 10x more value for the company.

If we just accept the roadmap our PM ‘hands’ to us, we risk working on the 90% crap, with features that don’t move the company anywhere.

‘Just building what I’m told’ is especially dangerous because of the next law:

## 7\. Zawinski’s Law

> *Every program attempts to expand until it can read mail. Those programs which cannot so expand are replaced by ones that can.*

This is especially true in the AI-era! It’s so easy now to add chatbots (or any feature) everywhere, making your product a gigantic monster. Maybe it’s ok that your customers will still have some spreadsheets outside of your product…

![r/ProgrammerHumor - True life cycle of software.](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fac8e7edb-1579-4ab6-a06d-bbfbfb20f6be_640x395.jpeg)

[Source](https://x.com/seldo/status/986975344912515073)

#### Why it matters

That’s how **feature creep happens** \- continuing to add features to the point that they undermine the product's value. Users complain that the product is becoming too complicated or confusing or can't find the functionality they need. In particular, the fresh ones are completely lost!

## 8\. Hyrum’s Law

> *With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody.*

This one is truly hilarious:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F788e06f5-772c-43cf-afe0-f67122c3c1c6_265x341.png)

Source: [xkcd.com](https://xkcd.com/1172/)

#### Why it matters

The law talks about APIs, but I believe it’s relevant to features too. As we saw in **Sturgeon’s Law**, 90% of everything is crap.

BUT, you’ll still spend tons of time maintaining 100% of your features - because as soon as you release something, there will be at least one customer who will use it. When you try to remove it, they’ll of course complain… And some business stakeholders will pressure you to keep supporting that feature.

I’ve discussed this problem in [Feature flags are ruining your codebase](https://zaidesanton.substack.com/p/feature-flags-are-ruining-your-codebase). Feature flags are a great tool, but they can be ‘abused’ to give PMs an excuse to **not make hard decisions**, such as completely removing a feature from the codebase.

## 9\. Price's law

> *In any group, 50% of the work is done by the square root number of people.*

For example:

If you have 10 engineers, half the output can be attributed to 3 of them.

Out of 100 engineers, 10 will generate an output similar to that of the other 90.

I learned about this law from ’s [LinkedIn post](https://www.linkedin.com/posts/itzysabo_elon-musk-fired-50-of-twitter-in-november-activity-7279404533863100416-xrkF), where he used it to explain why Twitter didn’t collapse:

> Elon Musk fired 50% of Twitter in November 2022.  
> Price's square root law explains why Twitter didn't collapse, even when a further 30% were fired.
> 
> The square root of the original 8,000 employees is just 90!

#### Why it matters

Scaling teams is hard. If you want to X2 your output, Price’s law means you’ll need to hire 4X more people. One explanation for that law is the Ringelmann effect:

## 10\. Ringelmann effect

> *The tendency for individual members of a group to become increasingly less productive as the size of their group increases.*

I was shocked to learn this phenomenon was discovered and analyzed more than 100 ago (in 1913!), with a rope-pulling competition. The more people participated in each group, the less effort each member gave:

![Ringelmann Effect](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F353310d7-df6d-4dee-8aa6-a25de0cf97b2_692x443.jpeg)

[Source](https://www.linkedin.com/pulse/ringelmann-effect-sabahattin-m%C4%B1st%C4%B1ko%C4%9Flu/)

Ringelmann identified 2 reasons:

1. Loss of motivation ( [social loafing](https://en.wikipedia.org/wiki/Social_loafing) ).
2. Coordination problems.

#### Why it matters

Yes, it’s not only about physical force.

wrote about [The magic of small engineering teams](https://newsletter.posthog.com/p/the-magic-of-small-engineering-teams) (they have 47 people organized in 15 teams).

Especially in smaller startups, with ‘new’ products, don’t be afraid to break out into smaller teams and clear areas of ownership.

## 11\. Goodhart’s law

> *When a measure becomes a target, it ceases to be a good measure.*

This one is pretty famous. It gets thrown around constantly in tech, saying that you shouldn’t measure lines of code or PRs, as people will (rightfully) game it.

![Goodhart's Law](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc1a64889-f2cf-4bee-8549-73bbe07abb80_295x321.png)

#### Why it matters

Every KPI your team or company uses can be gamed.

- Revenue? → Huge discounts
- Churn? → Make cancellation super difficult
- New users? → Aggressive ad campaigns that bring low-quality lead
- Support ticket resolution time? → Closing tickets quickly without really solving the problems (I’ve experienced that as a customer…)

It’s the same with velocity, actual VS planned, and so on - any metric by itself can become useless quite fast.

Still, the [answer is not “We shouldn’t measure”](https://leadership.garden/goodharts-law). If we take that approach, we will fall into Gilb’s trap:

## 12\. Gilb’s law

> *Anything you need to quantify can be measured in some way that is superior to not measuring it at all.*

Basically saying that it might be hard to measure, and the measurements might not be 100% accurate, but any measurement is better than nothing.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b1d2769-f2a5-40da-a876-cd1e6b2ca5ee_1024x1024.webp)

Source: Ideogram 🙃

#### Why it matters

This is a great counterbalance to Goodhart’s law. Instead of ‘giving’ up on measuring, we should start with something and work to improve it.

We’ve seen it happening with developer productivity. DORA, SpaceX, DevEx - different ways, each providing different advantages.

I love the [recently released DX Core 4](https://www.lennysnewsletter.com/p/introducing-core-4-the-best-way-to) which makes a lot of sense to me.

## 13\. Murphy’s Law

> *Anything that can go wrong will go wrong.*

No list of laws is complete without Murphy:)

#### Why it matters

We like to laugh about it, but I’m sure you have experienced something like this:

You are under pressure to release a feature. There is just this one edge case, that is super complex to test, and you are sure it will never happen. So you decide to cut a corner.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F947bb05f-98ea-4ef5-9be2-b3f59a561012_1024x1024.webp)

Guess what breaks production the next Sunday?

After it happened to me 4-5 times (yeah, I know…), I’m now trained to catch those thoughts. Every time I think something is improbable, I go the extra step to verify that we are still covered.

## Final words

None of those laws is a ‘real law’ - they are just great mental models. I hope that having them in mind will save you some pain in the day-to-day.

Check out [this repo](https://github.com/dwmkerr/hacker-laws) for some additional laws and principles!

### What I enjoyed reading this week

1. [MCP (Model Context Protocol): Simply explained in 5 minutes](https://read.highgrowthengineer.com/p/mcps-simply-explained) by
2. [Growth at what cost? Balancing user experience and revenue](https://www.elenaverna.com/p/growth-at-what-cost-balancing-user) by
3. [The Power of Micro-Exits: My Story Building & Selling Robin](https://www.focusedchaos.co/p/micro-exits-selling-a-startup) by and .
4. [Tips For Better Interactions](https://blog.staysaasy.com/p/tips-for-better-interactions) by