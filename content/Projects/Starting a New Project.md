---
type: checklist
category: development
tags: [laravel, inertia, vite, setup, vilt-stack]
---

# 🚀 New Project Kickoff Blueprint

> [!abstract] Purpose
> Standardized checklist for spinning up a high-performance VILT stack (Vue, Inertia, Laravel, Tailwind) application.

---

## 🏗️ Phase 1: Initial Setup
- [ ] **Choose Starter Kit:**
	- `laravel new [project-name] --starter=breeze` (Select Vue + Inertia + SSR + Pest)
- [ ] **Database Setup:** Create DB and update `.env`.
- [ ] **Application URL:** Set `APP_URL` (e.g., `http://[project].test`).
- [ ] **Storage Link:** `php artisan storage:link`.
- [ ] **Logging:** Set `LOG_CHANNEL=daily` in `.env`.
- [ ] **Mailing:** Set `MAIL_MAILER=log` for local development.

---

## 🎨 Phase 2: Frontend & Vite Configuration

### 1. Vite Aliases
Configure `vite.config.js` to match your preferred directory structure:
```javascript
alias: {
    '@': '/resources/js',
    '@assets': '/resources/assets',
    '@images': '/resources/assets/images',
    '@components': '/resources/js/Components',
    '@hooks': '/resources/js/Hooks',
    '@layouts': '/resources/js/Layouts',
    '@lib': '/resources/js/Lib',
    '@types': '/resources/js/Types',
},
```

### 2. TypeScript Setup
- [ ] Update `tsconfig.json` to include the new aliases.
- [ ] Ensure `resources/js/types` contains global types (Inertia, Page, etc.).

### 3. Styling & Assets
- [ ] **Fonts:** Install via Google Fonts or Fontsource.
- [ ] **Tailwind:** Configure `tailwind.config.js` with project colors and typography.
- [ ] **Global CSS:** Import fonts and custom layers in `resources/css/app.css`.

---

## 📦 Phase 3: Core Dependencies
- [ ] **PHP Packages:**
	- `barryvdh/laravel-debugbar` (dev)
	- `spatie/laravel-permission`
	- `spatie/laravel-medialibrary`
- [ ] **JS Packages:**
	- `lucide-vue-next` (Icons)
	- `clsx` & `tailwind-merge` (Class management)
	- `vue-sonner` (Toasts)

---

## 🛠️ Phase 4: Project Standards
- [ ] **Architecture:** Setup `Layouts` folder for persistent Inertia layouts.
- [ ] **Components:** Initialize `Components/UI` for base shadcn-style components.
- [ ] **Testing:** Run `php artisan test` to ensure Breeze defaults pass.

---

## 🧠 Phase 5: Obsidian Integration
- [ ] **Create Project Note:** Create `Projects/{{project_name}}.md`.
- [ ] **PARA Tagging:** Apply `status: 🟢 active` and `area: professional`.
- [ ] **Kanban:** Add the project to the [[private/To Do Kanban|Kanban Board]].

---

> [!tip] Final Step
> Commit the initial "Fresh" state to Git before starting feature development.
 