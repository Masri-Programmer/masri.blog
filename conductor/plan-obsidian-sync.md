# Implementation Plan: Obsidian Content Sync and Translation

## Objective
Establish a seamless workflow where the Obsidian vault remains the absolute source of truth for `masri-programmer-app`. Content authored in Obsidian will be automatically parsed, grouped by language, and synced into the application's database. Additionally, an AI-powered translation command will be provided to generate translated Markdown files directly within the vault.

## Scope & Key Files
- **New Command:** `app/Console/Commands/ObsidianSyncCommand.php`
- **New Command:** `app/Console/Commands/ObsidianTranslateCommand.php`
- **Impacted Models:** `App\Models\Project`, `App\Models\Service`, `App\Models\Note`

## Proposed Solution & Implementation Steps

### Phase 1: The Sync Command (`obsidian:sync`)
1.  **Directory Mapping:** The command will resolve the Obsidian `content` folder relative to the app (e.g., `base_path('../../Projects')`).
2.  **File Parsing:** Iterate through directories (`Projects/`, `Services/`, `Blog/`). Use `spatie/yaml-front-matter` to extract metadata (tags, status, area) and the Markdown body.
3.  **Language Grouping:** Group files by their base name. For example, `Amazon.md` (assumed English), `Amazon.de.md`, and `Amazon.ar.md` will be grouped into a single record.
4.  **Database Upsert:**
    *   Construct multi-language arrays for translatable fields (e.g., `title`, `short_description`, `full_description`).
    *   Map YAML properties to database columns (e.g., `status`, `tags`).
    *   Perform a database `updateOrCreate` on the respective models based on a unique identifier (like `slug` derived from the English title).

### Phase 2: The Translation Command (`obsidian:translate`)
1.  **Input Handling:** Accept an argument for a specific file or a folder (e.g., `php artisan obsidian:translate content/Projects`).
2.  **AI Integration:** Utilize the existing `laravel/ai` package to send the YAML frontmatter (only specific text fields like title/description) and the Markdown body for translation.
3.  **File Generation:** Create new Markdown files with the locale suffix (e.g., `.de.md`) in the exact same directory as the original file. This ensures the sync command can seamlessly pick them up.

## Verification
-   Run `php artisan obsidian:translate content/Projects/Amazon.md --locales=de`.
-   Verify `Amazon.de.md` is created with translated content.
-   Run `php artisan obsidian:sync`.
-   Query the database (via Tinker) to ensure the `Project` model for Amazon has the `'de'` translations correctly populated in the `title` and `full_description` arrays.
