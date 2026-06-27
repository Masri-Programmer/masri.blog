---
title: "Blog Manager"
description: "Content management dashboard for published posts, drafts, and coding tutorials."
tags:
  - dashboard
  - blog
  - content
created: 2026-06-24
updated: 2026-06-24
author: Mohamad Masri
layout: default
status: published
banner: "Assets/banners/banner-journal.jpg"
banner_y: 0.5
---

# ✍️ Blog Manager & Content Planner

> [!abstract] Dynamic Publication Hub
> Track draft statuses, tag distribution, word estimates, and publishing timelines for articles in your digital garden.

---

## 📅 Published & Active Articles

```dataview
TABLE 
    status as Status, 
    date as "Published Date", 
    round(file.size / 5) as "~ Words",
    tags as Tags
FROM "Blog"
WHERE file.name != "Highlights" 
    AND status = "published"
SORT date DESC
```

---

## 📝 Drafts & Brainstorming

```dataview
TABLE 
    round(file.size / 5) as "~ Words",
    tags as Tags,
    file.mtime as "Last Edited"
FROM "Blog"
WHERE file.name != "Highlights" 
    AND (status = "draft" OR !status)
SORT file.mtime DESC
```

---
[[Recent Articles|Back to Recent Articles]]
