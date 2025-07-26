---
title: "War story: the hardest bug I ever debugged"
source: https://www.clientserver.dev/p/war-story-the-hardest-bug-i-ever
author:
  - "[[Jacob Voytko]]"
published: 2025-01-23
created: 2025-04-11
description: All of a sudden, without any ostensible cause, Google Docs was flooded with errors. How it took me 2 days and a coworker to solve the hardest bug I ever debugged.
tags: Debugging, Google Docs, JavaScript, Chrome, V8 Engine, Bug Fixing, Software Engineering, Frontend Development, Performance, Nondeterministic Bugs
---
![[image-2.webp]]
### All of a sudden, with out any ostensible cause, Google Docs was flooded with errors. How it took me 2 days and a coworker to solve the hardest bug I ever debugged.

When I was on the Google Docs team, we did a weekly bug triage where we’d look for new issues and randomly assign them to teammates to investigate. One week, we had a new top error by a wide margin.

It was a fatal error. This means that it prevented the user from editing without reloading. It didn’t correspond to a Google Docs release. The stack trace added very little information. There wasn’t an associated spike in user complaints, so we weren’t even sure it was really happening — but if it *was* happening it would be really bad. It was Chrome-only starting at a specific release. This is less helpful than it sounds, since we often wrote browser-specific Docs bugs that affected only one of Internet Explorer, Firefox, Safari, and Chrome.

I tried to repro in dev. This was important for 2 reasons:

- Rule out Closure Compiler, Docs’ JavaScript compiler at the time.
- Debugging in unoptimized code is always easier than the alternative.

Okay, how do I begin? I crawled through our logs for internal users who had suffered from the problem. I hoped that somebody could tell me, “oh yeah, every time I try to do $foo it breaks.” But no internal users had been affected. Back to the drawing board.

I did a bunch of wild edits for a while. I added as many esoteric features as I could, copy/pasted a bunch of stuff into Docs from news websites to try to trigger the issue, played around with tables for a while. No dice.

What next? At the time, Docs had a basic scripting tool that could perform repetative actions. It was mostly useful for performance benchmarking, but because it provided consistent behavior I tried it out. I made a 50-page doc filled with [lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum) and had the script bold and unbold the entire document 100 times. Somewhere around the 20th cycle it crashed. I checked my console and it was the error in question!

I do it a few more times. It’s not always the 20th iteration, but it usually happens sometime between the 10th and 40th iteration. Sometimes it never happend. Okay, the bug is nondeterministic. We’re off to a bad start.

I think about the repro case. Is there anything interesting about bolding and unbolding large bodies of text? Yes actually. In many fonts and for many text samples, bolded text is wider than unbolded text. This was true for the font I was using. So it could have something do with wrapping lots of lines of text.

I set a breakpoint and started investigating. The crash looked like it was caused by some bad bookkeeping in the view, because the actual crash was reading a garbage cache value and trying to operate on it, and crashing as a result.

At the time [^1], Google Docs didn’t produce an HTML page as you might expect. It absolutely positioned every single thing on screen below the menu. To power this, Docs had a full layout engine that ran on every single keystroke. To make this even remotely performant within a browser in the 2010s, everything in the view was cached to within an inch of its life.

What does this mean? The place that crashed was downstream of the error. The error happened. Then there were some operations on the error. Then some accumulators accepted the wrong value. Then they were written to a cache. Eventually, some time later, there were enough bookkeeping errors that it was causing a crash.

If you consider everything together, this is a worst-case scenario. The bug is nondeterministic. What could even be causing that? Subpixel rendering errors that don’t deterministically accumulate? Kill me now. Next, the reproduction was slow. It took probably 20 seconds just to load the dev version of the editor, and another 40 seconds to trigger the issue. Then I needed to examine the state until I found something that was wrong, and then figure out how to set a breakpoint at the moment that wrong thing was cached or added to a queue.

If you haven’t debugged a lot of mystery problems, this is not what you want. Normally, you’d want to debug a mystery problem by binary searching.

- Is the problem on the client or the server? Client.
- Is the problem in the model or the view? View
- Is the problem in the UI rendering or the generic view processing? Generic view processing.
- And so on until you find where the bug is happening.

And then you keep halving what could be causing the problem until it’s clearly happening within some component, and then the bug’s days are numbered.

I had something else going against me. Until this point, I had mostly worked in the server, model, and network code. I was far from an expert in the view, which was the most complicated part of the application at the time. So I called over a coworker who had implemented a bunch of view features. It’s been 12 years so I don’t fully remember, but our conversation went something like this:

  
Me: “I’m investigating that view crash that is suddenly our top bug”  
Him: ”Do you have a specific question about the view? I have a lot on my plate right now.”  
Me:::showed him the repro and what I had found so far::  
Him: “I’ll clear my schedule.”

And there we sat, slowly bumping our breakpoints further and further back for 2 whole days, getting closer and closer to the cause.

After about a day and a half we had a breakthrough: the culprit was in a specific block of bookkeeping code [^2]. It was in a part of the code where an accumulator value was updated. So as we had done dozens of times, we updated our breakpoints to trigger a little earlier. We reload the document and execute the repro steps. Eventually, the breakpoint is triggered. We stare at the values of the variables in the function. It must be happening *right now*. Something is wrong.

The math isn’t adding up. My coworker adds a few logging statements and we reload and run the reproduction case again. This still doesn’t make sense.

I point to the `Math.abs()` call in the middle of the function. “Can we log the output value of this `Math.abs()` call?” We debate whether it’s worth the time, but he admitted that if it were somehow returning negative values it would actually explain the math.

We rerun the repro. We look at the logged value. `Math.abs()` is returning negative values for negative inputs. We reload and run it again. Math.abs() is returning negative values for negative inputs. We reload and run it again. Math.abs() is returning negative values for negative inputs.

We start spitballing about why this might be true. We checked to see if the function had been overridden. The function was still the builtin. We stare at every single character of this function. Everything looks fine.

Then we called in our Tech Lead / Manager, who had a reputation of being a human JavaScript compiler. We explained how we got here, that `Math.abs()` is returning negative values, and whether she could find anything that we were doing wrong. After persuading her that we weren’t somehow horribly mistaken, she sat down and looked at the code. Her CPU spun up to 100%, and she was muttering in Russian about parse trees or something while staring at the code and typing into the debug console. Finally she leaned back and declared that `Math.abs()` was definitely returning negative values for negative inputs.

And now, one of the major advantages of working at Google: backchanneling! I reached out to a Chrome contact to ask how I should even go about figuring out who to ask. They gave me some annoying “technically this is a V8 issue, not a Chrome issue.” I jump a link in the chain and either file a V8 bug or ask someone on the V8 team. I legitimately do not remember which. The V8 team immediately points me to a bug in their bug tracker that they already had in the `Fixed` state.

So what happened? Apparently V8 had refactored their optimization passes recently. To the best of my memory, this was the problem:

V8 had two levels of optimization.

1. A basic level used by most code. The compilation pass was extremely fast but not very optimized.
2. A super-optimized level for hot paths. To get an idea of what constitutes a hot path, create a 50 page Google Doc and bold and unbold it 20 times, and imagine how many times a function operating multiple times per word needs to run.

When doing the refactoring, they needed to provide new implementations for every opcode. Someone accidentally turned `Math.abs()` into the identity function for the super-optimized level.

But nobody noticed because it almost never ran — and was right half of the time when it did.

Satisfied that we had gotten to the root of the problem, we added a temporary browser check for the specific Chrome version. If it was that version of Chrome, it would just perform a manual `if` statement inline that would do the operation. We also added an extremely long comment — with citations — explaining that `math.Abs()` could return negative values in this specific Chrome version because of a V8 release with a regression, and to please delete it when our usage of that Chrome version dropped low enough.

There you have it: 2 days to find an issue that was already fixed and would have been resolved with no interaction. What can I even do from here as the newsletter author? Normally I like finding a teachable lesson. But it was 2 days of grueling debugging and somehow there aren’t any teachable lessons there.

Ah well, that’s life. And isn’t that the ultimate lesson?

[^1]: They switched everything to canvas rendering many years after I left. In theory this would have allowed them to dramatically simplify the layout code, and nothing I am writing here would still apply.

[^2]: To the best I can recall 12 years later, our view broke down rendering passes into “Tasks”, and Tasks could either “steal” or “give away” extra characters to adjacent rendering tasks. I don’t remember why this was useful. The code in question was executed for every Task and calculated the current tally of how many characters had been stolen or given away.