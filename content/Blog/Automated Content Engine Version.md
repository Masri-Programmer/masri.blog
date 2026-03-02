---
title: How I Automated My Second Brain
date: 2026-03-02
tags:
  - automation
  - second-brain
  - workflow
  - ai
  - obsidian
status: published
---

![[1772395460674.png]]

# How I Automated My Second Brain (and Published it to the World) 🧠⚡

I was tired of messy notes and staring at a blank page. So, I built a system that auto-researches, organizes, and publishes to [masri.blog](https://masri.blog) with zero friction.

> [!info] The Stack
> **OpenClaw** + **Obsidian** + **Gemini AI** + **Quartz** + **GitHub Pages**

## The Workflow

### 1. Research (OpenClaw)
I set up **OpenClaw** to run a weekly cron job. It autonomously scrapes the latest news in my niche, synthesizes the data, and drops ready-to-edit draft articles directly into my local folders.

### 2. Polish (Obsidian + AI Skills)
I refine those drafts in **Obsidian**. I use the `kepano/obsidian-skills` plugin and keep a private `gemini.md` file. This acts as my hidden "rulebook," telling the AI exactly how I want my notes formatted.

### 3. Auto-Organize (Gemini CLI)
Sorting is hard, so I don't do it. I run the **Gemini CLI**, which scans my local folders, applies the rules from my `.md` file, and auto-optimizes and tags everything for me.

### 4. Publish (Git + Quartz)
To share it, I push the local files via Git. **Quartz** instantly transforms the raw markdown into a beautiful website, hosted for free on GitHub Pages.

---

> [!success] The Result
> **OpenClaw** researches ➡️ **Gemini** organizes ➡️ **Quartz** publishes.
