# German Grammar MOC Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform `Blog/German/All German Grammar.md` into a structured hybrid Map of Content (MOC) that integrates internal vault notes with external references.

**Architecture:** A hybrid document structure: YAML Frontmatter -> Roadmap (CEFR Levels A1-C1) with internal links -> Categorical Deep-Dive (Word Types) with mixed internal/external links -> Dynamic Recent Additions (Dataview).

**Tech Stack:** Markdown, Obsidian Wikilinks, Dataview.

---

### Task 1: Initialize Frontmatter and Introduction

**Files:**
- Modify: `Blog/German/All German Grammar.md`

- [ ] **Step 1: Prepend YAML Frontmatter and Introduction**

Add the following to the top of the file:

```markdown
---
tags: [MOC, German, Grammar]
created: 2026-05-26
status: active
---

# 🇩🇪 German Grammar Map of Content (MOC)

This note serves as the central hub for German grammar study. It is organized by **CEFR Proficiency Level** (A1-C1) for a structured learning path and by **Grammatical Category** for quick reference.

- 🟢 **Internal Links**: [[Links like this]] point to notes already in the vault.
- 🔵 **External Links**: (External links) point to DeutschAkademie for supplementary study.
```

- [ ] **Step 2: Commit**

```bash
git add "Blog/German/All German Grammar.md"
git commit -m "docs: add frontmatter and intro to German Grammar MOC"
```

---

### Task 2: Restructure CEFR Roadmap

**Files:**
- Modify: `Blog/German/All German Grammar.md`

- [ ] **Step 1: Move and Enrich Level Sections**

Reorganize the file so that the "Niveau" sections are at the top, following the introduction. Enrich them with internal links discovered during research.

Replace the existing "Niveau" sections with:

```markdown
## 🗺️ Proficiency Roadmap (CEFR)

### 🟢 Niveau A1 (Anfänger)
*Basic communication and immediate needs.*
- **Core Notes**: [[Artikel von Nomen]], [[Dativ verben]], [[Ordinalzahlen & Temporal]]
- **Milestones**: Präsens, Modalverben, Nominativ/Akkusativ, Trennbare Verben.

### 🟡 Niveau A2 (Grundlagen)
*Routine tasks and detailed descriptions.*
- **Core Notes**: [[A2 Gramatik]], [[A2 Gramatik 1]], [[A2 Verben]], [[A2 Vocab]], [[A2 Wortschatz]]
- **Milestones**: Perfekt, Präteritum (haben/sein), Reflexive Verben, Dativ, Adjektivdeklination.

### 🟠 Niveau B1 (Mittelstufe)
*Opinions, dreams, and complex travel situations.*
- **Core Notes**: [[Sprechen]], [[Wortschatz]]
- **Milestones**: Plusquamperfekt, Passiv (Präsens), Futur 1, Konjunktiv 2, Genitiv.

### 🔴 Niveau B2 (Gute Mittelstufe)
*Complex texts and spontaneous interaction.*
- **Core Notes**: [[B2 Nomen mit Präpositionen]], [[B2 Redemittel]], [[B2 Verben, Adjektive und Präpositionen]], [[B2 Wortchatz]], [[Notizen]]
- **Milestones**: Futur 2, Konjunktiv 2 (Vergangenheit), Nominalisierung, Partizipien als Adjektive.

### 🟣 Niveau C1 (Fortgeschritten)
*Academic language and stylistic nuances.*
- **Milestones**: Konjunktiv 1, Gerundiv, Verbalstil vs. Nominalstil.
```

- [ ] **Step 2: Commit**

```bash
git add "Blog/German/All German Grammar.md"
git commit -m "docs: restructure and enrich CEFR roadmap in Grammar MOC"
```

---

### Task 3: Enrich Categorical Deep-Dive

**Files:**
- Modify: `Blog/German/All German Grammar.md`

- [ ] **Step 1: Insert Internal Links into Grammatical Categories**

Maintain the existing categorical headings (Verben, Nomen, etc.) but insert relevant internal links at the top of their respective sections.

Modify the following sections:

**Under ## Verben:**
```markdown
- **Internal Mastery**: [[A2 Verben]], [[Dativ verben]], [[B2 Verben, Adjektive und Präpositionen]]
```

**Under ## Nomen:**
```markdown
- **Internal Mastery**: [[Artikel von Nomen]], [[B2 Nomen mit Präpositionen]]
```

**Under ## Adjektive:**
```markdown
- **Internal Mastery**: [[B2 Verben, Adjektive und Präpositionen]]
```

- [ ] **Step 2: Commit**

```bash
git add "Blog/German/All German Grammar.md"
git commit -m "docs: link internal notes in categorical sections of Grammar MOC"
```

---

### Task 4: Add Dynamic 'Recent' Section

**Files:**
- Modify: `Blog/German/All German Grammar.md`

- [ ] **Step 1: Append Dataview Query**

Add a section at the very end of the file to automatically track activity in the German folder.

```markdown
---
## 🆕 Recently Updated Notes
*Automatically tracks recent changes in your German grammar collection.*

```dataview
LIST
FROM "Blog/German"
WHERE file.name != this.file.name
SORT file.mtime DESC
LIMIT 5
```
```

- [ ] **Step 2: Final Commit**

```bash
git add "Blog/German/All German Grammar.md"
git commit -m "feat: add dataview query for recent notes in Grammar MOC"
```

---

### Task 5: Final Review and Validation

- [ ] **Step 1: Verify Wikilinks**
Check that all internal links `[[...]]` point to existing files in the vault.

- [ ] **Step 2: Verify Formatting**
Ensure the heading hierarchy is logical (H1 for Title, H2 for Major Sections, H3 for Levels/Categories).

- [ ] **Step 3: Confirm external links**
Briefly spot-check that the DeutschAkademie URLs still work.
