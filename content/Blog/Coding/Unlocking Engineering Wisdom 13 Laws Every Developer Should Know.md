---
title: Unlocking Engineering Wisdom 13 Laws Every Developer Should Know
tags: Software Engineering, Project Management, Team Management, Productivity, Mental Models
source: https://newsletter.manager.dev/p/the-13-software-engineering-laws?ref=dailydev
author: "[[Anton Zaides]] (Original Author), [[Masri Blog]]"
description: An exploration of 13 fundamental laws in software engineering, offering practical insights for developers and managers.
keywords:
  - "Hyrum's Law"
  - "Conway's Law"
  - "Parkinson's Law"
  - "Brooks' Law"
  - "Hofstadter's Law"
  - "Cunningham's Law"
  - "Sturgeon's Law"
  - "Zawinski's Law"
  - "Price's Law"
  - "Ringelmann Effect"
  - "Goodhart's Law"
  - "Gilb's Law"
  - "Murphy's Law"
  - "software development"
  - "engineering management"
  - "productivity"
  - "mental models"
date created: 2025-04-16
---
Ever feel like software projects have minds of their own? 🤔 Turns out, there are some underlying "laws" or principles that can explain (and sometimes predict!) the common challenges and quirks we face. Understanding these can save you headaches and make you a more effective developer or manager.

Let's explore 13 insightful laws, some famous, some niche, but all incredibly relevant to our field.

## 1. Parkinson’s Law ⏳

> *Work expands to fill the available time.*

**The Gist:** If you give a task a week, it'll take a week, even if it could be done sooner. Deadlines can drive progress.
**Why It Matters:** Sensible deadlines can improve efficiency by leveraging the Iron Triangle (scope, resources, time). However, setting *unreasonable* deadlines based on this law leads to burnout or missed targets, especially considering Hofstadter's Law...

## 2. Hofstadter’s Law 🤯

> *It always takes longer than you expect, even when you take into account Hofstadter’s Law.*

**The Gist:** Software estimation is notoriously difficult. Projects often run late, even with buffers factored in.
**Why It Matters:** This law counterbalances Parkinson's. Overly optimistic deadlines (inspired by Parkinson's) combined with the reality of Hofstadter's Law often lead to late projects or stressed teams. Finding the balance requires practice, clear communication, and often, a flexible scope.

## 3. Brooks’ Law 👥➡️🐢

> *Adding manpower to a late software project makes it later.*

**The Gist:** Throwing more people at a delayed project usually increases communication overhead and onboarding time, slowing things down further. Think: "Nine women can't make a baby in one month."
**Why It Matters:** When facing delays, the instinct might be to add resources. Resist it! Adding people introduces new communication paths and requires existing team members to spend time training, often resulting in a net *decrease* in short-term productivity.

## 4. Conway’s Law 🏗️

> *Organizations produce designs which are copies of the communication structures of these organizations.*

**The Gist:** The way your teams are structured and communicate directly influences the architecture of the systems they build. Separate frontend/backend teams might lead to clunky API integrations.
**Why It Matters:** You can use the **Inverse Conway Maneuver**: intentionally structure your teams to achieve a desired architecture. For example, creating cross-functional teams focused on specific product areas can lead to more cohesive, efficient systems.

## 5. Cunningham’s Law ✅

> *The best way to get the right answer on the internet is not to ask a question, but to post the wrong answer.*

**The Gist:** People are often quicker to correct an error than to answer a question directly.
**Why It Matters:** Stuck waiting for another team (like DevOps)? Instead of just asking, try submitting a pull request with your best guess, even if imperfect. This often prompts a faster, more specific response (corrections!) and helps you learn the process.

## 6. Sturgeon’s Law ✨💩

> *90% of everything is crap.*

**The Gist:** A blunt assessment that most outputs (code, features, ideas) aren't great. Similar to the Pareto principle (80/20) but more extreme.
**Why It Matters:** Focus on value. Most features might not significantly impact the business. True "10x engineers" aren't just prolific coders; they build things that deliver disproportionate value. Don't blindly build features from a roadmap; question their impact.

## 7. Zawinski’s Law 🎈

> *Every program attempts to expand until it can read mail. Those programs which cannot so expand are replaced by ones that can.*

**The Gist:** Software has a tendency towards feature creep, bloating until it becomes overly complex and tries to do everything.
**Why It Matters:** Be mindful of adding features just because you can (especially easy with new tech like AI!). Constant expansion can dilute the core value proposition, confuse users, and increase maintenance burden.

## 8. Hyrum’s Law (The Law of Implicit Interfaces) 📜➡️🔗

> *With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody.*

**The Gist:** Users will inevitably rely on implementation details or undocumented behaviors of your API or features, not just the official contract.
**Why It Matters:** Refactoring or removing *anything* (even "unused" features or internal behaviors) becomes risky. Someone, somewhere, might be relying on it. This makes cleanup and evolution difficult and highlights the importance of careful interface design and deprecation strategies. Feature flags, if not managed well, can exacerbate this by delaying hard decisions about removal.

## 9. Price's Square Root Law √👥 = 50% work

> *In any group, 50% of the work is done by the square root number of people.*

**The Gist:** Productivity isn't evenly distributed. In a team of 10, roughly 3 people ($\sqrt{10} \approx 3$) might account for half the output. In a group of 100, it might be just 10 people.
**Why It Matters:** Scaling teams doesn't linearly scale output. To double the productive output, you might need to quadruple the team size ($(\sqrt{4N})^2 = 4N$, so $2 \times \sqrt{N}$ people do half the work). This relates closely to the Ringelmann Effect.

## 10. Ringelmann Effect 📉

> *The tendency for individual members of a group to become increasingly less productive as the size of their group increases.*

**The Gist:** As group size increases, individual effort tends to decrease due to factors like "social loafing" (feeling less responsible) and increased coordination overhead.
**Why It Matters:** Smaller, focused teams often outperform larger ones, especially in dynamic environments. Breaking down work into clear areas of ownership for smaller teams can combat this effect.

## 11. Goodhart’s Law 🎯➡️🗑️

> *When a measure becomes a target, it ceases to be a good measure.*

**The Gist:** As soon as you start using a metric for evaluation or reward (making it a target), people will optimize for the metric itself, potentially undermining the original goal. Measuring lines of code? Expect verbose code. Targeting ticket resolution time? Expect prematurely closed tickets.
**Why It Matters:** Be cautious with KPIs. Any single metric can be gamed. Use a balanced set of metrics and qualitative assessments rather than relying on one number.

## 12. Gilb’s Law 📊 > ∅

> *Anything you need to quantify can be measured in some way that is superior to not measuring it at all.*

**The Gist:** Even if measurement is difficult and imperfect, having *some* data is usually better than having none.
**Why It Matters:** This acts as a counterpoint to the paralysis Goodhart's Law can induce. Don't give up on measurement entirely. Start somewhere, acknowledge the limitations, and iterate. Metrics like DORA or frameworks like DX Core 4 provide starting points for complex areas like developer productivity.

## 13. Murphy’s Law 💣

> *Anything that can go wrong will go wrong.*

**The Gist:** The classic reminder that potential problems often become actual problems, especially the ones you dismiss as unlikely.
**Why It Matters:** Don't cut corners on edge cases or error handling just because they seem improbable. That "one-in-a-million" scenario has a knack for occurring at the worst possible moment (like a Sunday morning). Build resilience and test thoroughly.

## Summary & Takeaways 💡

These "laws" aren't rigid scientific principles, but powerful mental models distilled from collective experience in software development. Recognizing them can help you:

* **Estimate realistically:** Acknowledge Hofstadter's Law.
* **Structure teams effectively:** Consider Conway's Law.
* **Scale wisely:** Understand Brooks' Law, Price's Law, and the Ringelmann Effect.
* **Manage features carefully:** Beware of Sturgeon's, Zawinski's, and Hyrum's Laws.
* **Use metrics judiciously:** Balance Goodhart's and Gilb's Laws.
* **Build robustly:** Remember Murphy's Law.

Keeping these principles in mind can help you navigate the complexities of building software and leading teams more effectively.

## Further Exploration 🧭

* Dive deeper into many related concepts at the [Hacker Laws GitHub repository](https://github.com/dwmkerr/hacker-laws).

**Reflection Questions:**

* Which of these laws most closely matches your own experiences in software development?
* How might consciously applying one of these laws change your approach to your current project or team structure?

---

*This post is a summary and interpretation based on the original article.*
**For the full context and original author's insights, please check out:**
[The 13 software engineering laws by Anton Zaides](https://newsletter.manager.dev/p/the-13-software-engineering-laws?ref=dailydev)