---
type: dashboard
category: goals
tags: [goals, habits, vision, strategy]
---

# 🎯 Goals & Habits Dashboard

> [!abstract] Strategic Vision
> Mapping high-level annual objectives to daily actionable habits and 90-day sprints.

---

## 🏆 Annual Objectives: {{date:YYYY}}
```dataview
TABLE 
    status as Status,
    priority as Priority,
    completion as Progress
FROM "private/🎯 Goals"
WHERE type = "annual-goal"
SORT priority DESC
```

---

## 🚀 Active 90-Day Sprint
> [!tip] Focus
> Break annual goals into 3-month execution blocks.

```dataview
LIST 
FROM "private/🎯 Goals"
WHERE type = "sprint" AND status = "active"
```

---

## 🏃 Master Habit Tracker
- [[private/🎯 Goals/📝 Habit Tracker|📉 View Monthly Habit Trends]]
- [[private/📋 Templates/📅 Daily|📅 Today's Daily Note]] (Log habits here)

---

## 🖼️ Vision & Identity
- [[private/🎯 Goals/📝 Vision Board|✨ Vision Board]]
- [[private/📋 Templates/🗓️ Annual Goal|🏆 Set New Annual Goal]]
- [[private/📋 Templates/🗓️ 90-Day Sprint|🚀 Start New Sprint]]

---

## 🛠️ Management
- [[index|🏠 Home]]
- [[private/💼 Professional/📝 Professional Dashboard|👔 Professional OS]]
