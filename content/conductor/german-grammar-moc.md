# German Grammar MOC Implementation Plan

## Objective
Restructure `Blog/German/All German Grammar.md` into a "Curated Manual MOC" (Map of Content) that uses a hybrid organization structure (by CEFR level and by grammatical category). The goal is to prioritize internal vault links while retaining existing external reference links as fallbacks, and adding a dynamic Dataview query for recent notes.

## Key Files & Context
- **Target File**: `Blog/German/All German Grammar.md`
- **Internal Note Sources**: 
  - `Blog/German/A1/`
  - `Blog/German/A2/`
  - `Blog/German/B1/`
  - `Blog/German/B2/`
- **Current Content**: Contains external links to DeutschAkademie organized by category, and a basic overview of levels A1-C1.

## Implementation Steps

### 1. Frontmatter and Introduction
- Add standard YAML frontmatter (e.g., `tags: [MOC, German, Grammar]`).
- Write a brief introduction explaining how to use the MOC.

### 2. Section: Roadmap by CEFR Level
- Reorganize the existing A1-C1 headings to the top of the file.
- Under each level, summarize the key grammar milestones.
- **Inject Internal Links**: Link directly to existing level-specific notes:
  - **A1**: `[[Artikel von Nomen]]`, `[[Dativ verben]]`, `[[Ordinalzahlen & Temporal]]`
  - **A2**: `[[A2 Gramatik]]`, `[[A2 Gramatik 1]]`, `[[A2 Verben]]`, `[[A2 Vocab]]`, `[[A2 Wortschatz]]`
  - **B1**: `[[Sprechen]]`, `[[Wortschatz]]`
  - **B2**: `[[B2 Nomen mit Präpositionen]]`, `[[B2 Redemittel]]`, `[[B2 Verben, Adjektive und Präpositionen]]`, `[[B2 Wortchatz]]`, `[[Notizen]]`

### 3. Section: Categorical Deep-Dive
- Keep the existing headings (Verben, Nomen, Adjektive, etc.).
- Maintain the nested lists of external `DeutschAkademie` links.
- Place relevant internal links at the top of these categories (e.g., placing `[[B2 Nomen mit Präpositionen]]` under the *Präpositionen* and *Nomen* headings).

### 4. Section: Recent Additions (Dataview)
- Append a Dataview query at the bottom of the file to automatically capture newly added or modified German notes.
  ```dataview
  LIST
  FROM "Blog/German"
  WHERE file.name != "All German Grammar"
  SORT file.mtime DESC
  LIMIT 5
  ```

## Verification & Testing
- Visually inspect the Markdown rendering to ensure clean formatting.
- Verify that internal wikilinks map correctly to their respective files.
- Verify that external links are intact and functioning.
- Confirm the Dataview query renders properly in Obsidian.