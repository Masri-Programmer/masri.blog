# Meeting Smalltalk Cheat Sheet Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a clean, situational cheat sheet for meeting smalltalk and bonding, optimized for Google Docs.

**Architecture:** A situational grid-style Markdown document that categorizes conversation prompts into "modules" for quick scanning during live calls.

**Tech Stack:** Markdown.

---

### Task 1: Create Cheat Sheet Directory and File

**Files:**
- Create: `private/Work/MasriGMBH/Meetings/Meeting_Smalltalk_Cheat_Sheet.md`

- [x] **Step 1: Create the directory**
```bash
mkdir -p private/Work/MasriGMBH/Meetings/
```

- [x] **Step 2: Create and write the initial content**
```markdown
# 🤝 Meeting Smalltalk Cheat Sheet

> [!tip] Quick Tip
> **Match the Energy:** Short answers = move faster to transition.
> **50/50 Sharing:** Share a tiny bit of your life first to lower their guard.

---

## 🌅 1. The Opening (Warm-up)

| Scenario | Prompt |
| :--- | :--- |
| **Weekly Catch-up** | "Hi [Name], schön dich zu hören! Wie war deine Woche bisher?" |
| **Starting the Week** | "Hi [Name], freut mich, dass es klappt! Startest du entspannt in die Woche oder ist es turbulent?" |
| **Relatable Share** | "Ich habe das Wochenende genutzt, um mal komplett abzuschalten... Konntest du das auch genießen?" |

---

## 🖼️ 2. Background & Office (Situational)

| If you see... | You say... |
| :--- | :--- |
| **Stylish Office** | "Cooler Hintergrund! Ist das echt oder ein Filter? Sieht extrem stylisch aus." |
| **Clean/Minimalist** | "Sehr cleaner Setup im Hintergrund! Ich mag diesen minimalistischen Stil." |

---

## 🐾 3. Pets & Family (Situational)

| If you hear/see... | You say... |
| :--- | :--- |
| **Dog / Pet** | "Ah, wer schaut denn da kurz vorbei? Mega sympathischer Co-Worker, den du da hast!" |
| **Child / Family** | "Genieß die Zeit, die werden viel zu schnell groß! Kein Ding, falls es mal lauter wird." |

---

## 🚀 4. The Pivot (Transition to Agenda)

**The Bridge:**
> "So gerne ich mich weiter mit dir unterhalten würde – ich will deine Zeit respektieren. Wollen wir direkt loslegen und schauen, wie wir dein Projekt heute voranbringen können?"

---

## ✍️ Quick Hooks Log
*Note down names/details here immediately during the call for future follow-ups:*
- **Dog Name:**
- **Kids Age:**
- **Specific Hobby:**
```

- [x] **Step 3: Verify the file exists and content is correct**
Run: `ls private/Work/MasriGMBH/Meetings/Meeting_Smalltalk_Cheat_Sheet.md`
Run: `cat private/Work/MasriGMBH/Meetings/Meeting_Smalltalk_Cheat_Sheet.md`

- [x] **Step 4: Commit the new file**
```bash
git add private/Work/MasriGMBH/Meetings/Meeting_Smalltalk_Cheat_Sheet.md
git commit -m "feat: add meeting smalltalk cheat sheet"
```
