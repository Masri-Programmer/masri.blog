# Design Specification: Advanced Obsidian Vault (Premium Template)

**Date:** 2026-05-28
**Status:** Draft (Pending User Review)
**Aesthetic:** Minimalist, Professional
**Organization System:** Strict PARA (Projects, Areas, Resources, Archives)

## 1. Vision & Goals
To create a reusable, scalable, and premium Obsidian vault template that balances productivity, business management, and knowledge organization. The vault is designed for resale to freelancers, traders, creators, and agencies who value a minimal "app-like" experience within Obsidian.

## 2. Folder Hierarchy (Strict PARA)

### 00 Dashboard
- **Purpose:** Central command center.
- **Key Files:** `Home.md` (Main HUD), `Quick Actions.md`.

### 10 Projects
- **Purpose:** Active, outcome-driven efforts with a deadline.
- **Subfolders:** `Active Projects`, `Planning`.

### 20 Areas
- **Purpose:** Ongoing responsibilities (standard of performance).
- **Subfolders:**
    - `Business`: (Clients, Services, Emails)
    - `Finance`: (Trading, Portfolio)
    - `Identity`: (Resume, Portfolio, Contact Management)
    - `Professional`: (Work, Coding)
    - `Personal`: (Routine)

### 30 Resources
- **Purpose:** Topics of ongoing interest and reference.
- **Subfolders:** `Blog`, `Documentation`, `Research`, `Assets` (Attachments).

### 40 Archives
- **Purpose:** Cold storage for completed projects and inactive areas/resources.

### 90 System
- **Purpose:** Vault mechanics and maintenance.
- **Subfolders:** `Templates`, `Daily Notes`, `Scripts`, `Vault Setup`.

## 3. Dashboard & Navigation

### 3.1 Home Dashboard (`Home.md`)
- **Header:** Minimalist banner and a text-based navigation bar.
- **Action Center:** Dataview tables for `Active Projects` and `Today's Tasks`.
- **Intelligence:** `Recent Notes` log and `Quick Capture` buttons.

### 3.2 Navigation System
- A consistent header template applied to all landing pages for easy movement between PARA buckets.

## 4. Templates & Metadata (Obsidian Properties)

### 4.1 Core Templates
- **Project:** `status`, `deadline`, `priority`, `area`.
- **Client:** `company`, `contact_person`, `status`, `last_contact`.
- **Trade:** `asset`, `type`, `entry_price`, `exit_price`, `pnl`.
- **Daily Note:** `mood`, `productivity`, `focus_score`.

### 4.2 Specialized Templates
- **Blog Post:** `platform`, `publish_date`, `tags`.
- **Service/Product:** Description and pricing.
- **Resume/Portfolio:** Professional metric tracking.

## 5. Automation & Scalability

### 5.1 Review Cycles
- Pre-built **Weekly** and **Monthly** review notes to maintain vault hygiene.

### 5.2 Dynamic Views
- **Trading Journal:** Automated win rate and PnL calculation via Dataview.
- **Client Pipeline:** Visual status tracking for business leads.

### 5.3 Plugin Requirements
- **Dataview:** (Required) For all dynamic dashboards.
- **Templater:** (Recommended) For automatic template application.
- **Periodic Notes:** (Recommended) For review cycles.

## 6. Implementation Strategy
1. Create folder structure.
2. Configure initial `.obsidian` settings (Minimalist theme, property visibility).
3. Build core templates in `90 System/Templates`.
4. Create the `Home.md` dashboard with Dataview queries.
5. Populate `Vault Setup` with documentation for the end-user.
