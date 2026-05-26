# FAQ Dropdown (Accordion) Optimization Design

## Goal
Transform the `private/Work/MasriGMBH/Meetings/Häufig gestellte Fragen.md` file into a scannable, interactive FAQ using Obsidian's foldable callouts.

## Structural Changes
### 1. Accordion Conversion
- Every H3 question will be converted into a foldable FAQ callout: `> [!faq]- Question`.
- The `-` ensures the callout is collapsed by default.

### 2. Content Preservation
- All answer text, including bullet points, code blocks, and pricing lists, will be nested inside the callout body using standard Markdown indentation (`>`).

### 3. Cleanup
- Remove the redundant `---` horizontal rules between sections, as the callout borders will provide sufficient visual separation.

## Target File
- `private/Work/MasriGMBH/Meetings/Häufig gestellte Fragen.md` (Update in place)
