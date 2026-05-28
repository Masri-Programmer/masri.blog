# Advanced Obsidian Vault Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional, minimal, and scalable Obsidian vault template using strict PARA organization and Dataview integration.

**Architecture:** A folder-based hierarchy (PARA) with a centralized System folder for templates and metadata. The Dashboard uses Dataview to surface actionable data across the vault.

**Tech Stack:** Obsidian, Dataview (Plugin), Templater (Recommended).

---

### Task 1: Folder Structure Setup

**Files:**
- Create: All core PARA and System folders.

- [ ] **Step 1: Create the PARA root folders**
Run: `mkdir "00 Dashboard", "10 Projects", "20 Areas", "30 Resources", "40 Archives", "90 System"`

- [ ] **Step 2: Create subfolders for Projects**
Run: `mkdir "10 Projects/Active Projects", "10 Projects/Planning"`

- [ ] **Step 3: Create subfolders for Areas**
Run: `mkdir "20 Areas/Business", "20 Areas/Business/Clients", "20 Areas/Business/Services", "20 Areas/Business/Emails", "20 Areas/Finance", "20 Areas/Identity", "20 Areas/Professional", "20 Areas/Personal"`

- [ ] **Step 4: Create subfolders for Resources**
Run: `mkdir "30 Resources/Blog", "30 Resources/Documentation", "30 Resources/Research", "30 Resources/Assets"`

- [ ] **Step 5: Create subfolders for System**
Run: `mkdir "90 System/Templates", "90 System/Daily Notes", "90 System/Scripts", "90 System/Vault Setup"`

- [ ] **Step 6: Commit**
```bash
git add .
git commit -m "feat: initialize PARA folder structure"
```

### Task 2: Core Templates & Metadata

**Files:**
- Create: `90 System/Templates/Project Template.md`
- Create: `90 System/Templates/Client Template.md`
- Create: `90 System/Templates/Trade Template.md`
- Create: `90 System/Templates/Daily Note Template.md`

- [ ] **Step 1: Create Project Template**
```markdown
---
status: Active
priority: Medium
area: 
deadline: 
tags: project
---
# {{title}}

## 🎯 Goals
- [ ] 

## 📝 Tasks
```dataview
TASK FROM "10 Projects" WHERE !completed AND contains(file.name, this.file.name)
```

## 🔗 Resources
- 
```

- [ ] **Step 2: Create Client Template**
```markdown
---
company: 
contact_person: 
email: 
status: Lead
last_contact: 
tags: client
---
# {{title}}

## 📋 Client Info
- **Email:** {{email}}
- **Status:** {{status}}

## 📅 Meeting Log
- 
```

- [ ] **Step 3: Create Trade Template**
```markdown
---
asset: 
type: Long
entry_price: 0
exit_price: 0
pnl: 0
strategy: 
tags: trade
---
# Trade: {{asset}} ({{date}})

## 📊 Rationale
- 

## 🖼️ Screenshots
- 
```

- [ ] **Step 4: Create Daily Note Template**
```markdown
---
mood: 
productivity: 
focus_score: 
tags: daily
---
# {{date}}

## 📅 Today's Focus
- [ ] 

## 📓 Log
- 
```

- [ ] **Step 5: Commit**
```bash
git add "90 System/Templates"
git commit -m "feat: add core note templates"
```

### Task 3: Dashboard & Navigation

**Files:**
- Create: `Home.md`
- Create: `90 System/Templates/Global Header.md`

- [ ] **Step 1: Create Global Header Template**
```markdown
[[Home]] | [[10 Projects|Projects]] | [[20 Areas|Areas]] | [[30 Resources|Resources]] | [[90 System|System]]
***
```

- [ ] **Step 2: Create Home Dashboard**
```markdown
# 00 Dashboard

> [!multi-column]
> > [!info] Navigation
> > [[10 Projects|🚀 Projects]]
> > [[20 Areas|🏢 Areas]]
> > [[30 Resources|📚 Resources]]
> > [[90 System|⚙️ System]]
>
> > [!todo] Today
> > ```dataview
> > TASK FROM "90 System/Daily Notes" WHERE !completed
> > ```

## 🚀 Active Projects
```dataview
TABLE deadline, priority
FROM "10 Projects"
WHERE status = "Active"
SORT deadline ASC
```

## 📝 Recent Notes
```dataview
LIST FROM "" WHERE file.name != this.file.name SORT file.mday DESC LIMIT 10
```
```

- [ ] **Step 3: Commit**
```bash
git add Home.md "90 System/Templates/Global Header.md"
git commit -m "feat: implement home dashboard and navigation"
```

### Task 4: Specialized Templates & Reviews

**Files:**
- Create: `90 System/Templates/Blog Post Template.md`
- Create: `90 System/Templates/Weekly Review Template.md`

- [ ] **Step 1: Create Blog Post Template**
```markdown
---
platform: 
publish_date: 
status: Drafting
tags: content
---
# {{title}}

## 💡 Outline
- 

## ✍️ Content
- 
```

- [ ] **Step 2: Create Weekly Review Template**
```markdown
# Weekly Review: {{date}}

## 📥 Inbox Clearing
- [ ] Process physical notes
- [ ] Clear digital inbox

## 🚀 Project Review
- [ ] Update project statuses
- [ ] Review next week's deadlines

## 📈 Growth
- What went well?
- What could be improved?
```

- [ ] **Step 3: Commit**
```bash
git add "90 System/Templates"
git commit -m "feat: add specialized templates and review cycle"
```

### Task 5: Documentation & Final Setup

**Files:**
- Create: `90 System/Vault Setup/Introduction.md`
- Create: `90 System/Vault Setup/Installation.md`

- [ ] **Step 1: Create Introduction**
```markdown
# Welcome to your Advanced Obsidian Vault

This vault is structured using the **PARA** method to help you stay organized and productive.

- **Projects:** Active tasks with a deadline.
- **Areas:** Ongoing responsibilities.
- **Resources:** Interests and references.
- **Archives:** Past items.
```

- [ ] **Step 2: Create Installation Guide**
```markdown
# Installation & Setup

1. Install the following community plugins:
   - Dataview
   - Templater
2. Set your "Templates" folder in Templater settings to `90 System/Templates`.
3. Configure "Daily Notes" to save in `90 System/Daily Notes`.
```

- [ ] **Step 3: Final Commit**
```bash
git add "90 System/Vault Setup"
git commit -m "docs: add vault introduction and installation guides"
```
