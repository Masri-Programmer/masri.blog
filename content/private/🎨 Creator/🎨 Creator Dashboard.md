---
type: dashboard
category: creator
tags: [content, creator, blog, marketing]
---

# 🎨 Creator Dashboard

> [!abstract] Studio Hub
> Manage your content pipeline from initial hook to multi-platform distribution.

---

## 📅 Content Calendar
> [!tip] Workflow
> Set `publish_date` and `status: scheduled` to see posts here.

```dataview
TABLE 
    platform as Platform,
    publish_date as "Publish Date",
    status as Status
FROM "private/🎨 Creator" OR "Blog"
WHERE publish_date >= date(today)
SORT publish_date ASC
```

---

## ✍️ Active Production
- [[private/🕒 Time/📅 Editorial Calendar|📝 Editorial Calendar (Blog)]]
- [[private/🎨 Creator/📝 Hooks & Headlines|🪝 Hooks & Headlines Library]]
- [[private/📋 Templates/📝 Content Repurposing|♻️ Repurposing Strategy Template]]

---

## 🛠️ Creator Templates
- [[private/📋 Templates/📝 Post Planner|📱 New Social Post]]
- [[private/📋 Templates/🤖 Video Script|🎬 New Video Script]]
- [[private/📋 Templates/📝 Newsletter|📧 New Newsletter]]

---

## 📈 Platform Quick Links
- [[Portfolio|📂 Portfolio]]
- [[Services/index|💼 Services]]
- [[index|🏠 Home]]
