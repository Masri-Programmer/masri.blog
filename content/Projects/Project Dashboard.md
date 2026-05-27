---
title: "Project Command Center"
tags: [dashboard, projects]
type: dashboard
---

# 🚀 Project Command Center

> [!abstract] Overview
> This dashboard automatically tracks all active and upcoming projects in your vault. 
> To add a project here, use the `type: project` property in your note.

---

## 🔥 High Priority & Overdue
> [!danger] Immediate Action Required
> Projects and tasks that are passed their due date.

```dataview
TABLE 
    status as Status, 
    priority as Priority, 
    due_date as "Due Date",
    area as Area
FROM "Projects"
WHERE type = "project" 
    AND status != "✅ completed" 
    AND (priority = "🔥 high" OR due_date < date(today))
SORT due_date ASC
```

---

## 🔔 Reminders (Invoices & Meetings)
> [!todo] Upcoming Tasks
> All tasks with due dates tracked in your vault.

```tasks
not done
due before in 2 weeks
short mode
```

---

## 🟢 Active Projects
> [!info] Current Workstream
> All ongoing projects currently in progress.

```dataview
TABLE 
    priority as Priority, 
    due_date as "Due Date",
    area as Area
FROM "Projects"
WHERE type = "project" 
    AND status = "🟢 active"
    AND priority != "🔥 high"
SORT due_date ASC
```

---

## 🟡 On Hold / Backlog
> [!todo] Future & Paused
> Projects waiting for resources or a start date.

```dataview
TABLE 
    status as Status,
    priority as Priority, 
    area as Area
FROM "Projects"
WHERE type = "project" 
    AND (status = "🟡 on-hold" OR status = "backlog")
SORT priority DESC
```

---

## ✅ Recently Completed
> [!success] Accomplishments
> Last 10 finished projects.

```dataview
LIST 
FROM "Projects"
WHERE type = "project" AND status = "✅ completed"
SORT file.mtime DESC
LIMIT 10
```

---

## 🛠️ Project Management Quick Links
- [[private/Templates/Project|➕ New Project Template]]
- [[private/Templates/Automation - Kimai Invoice Follow-up|🧾 Log Kimai Invoice]]
- [[private/To Do Kanban|📋 Kanban Board]]
- [[Portfolio|🌐 Public Portfolio]]

---
