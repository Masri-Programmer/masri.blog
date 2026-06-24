---
title: "Bookmarks Finder"
description: "Interactive filter and search engine for curated coding, AI, and developer bookmarks."
tags:
  - bookmarks
  - tool
  - utility
created: 2026-06-24
updated: 2026-06-24
author: Mohamad Masri
layout: default
status: published
banner: "Assets/banners/banner-resources.jpg"
banner_y: 0.5
---

# 🔖 Bookmarks Search Engine

> [!tip] Interactive Search
> Use the filters and search field below to instantly query your bookmarks. This page dynamically renders your bookmarks from the `Blog/Coding/Browser Bookmarks` folder.

---

```dataviewjs
let input = {
  "query": 'TABLE tags as Tags, description as "Summary" FROM "Blog/Coding/Browser Bookmarks"',
  "filterColumnCount": 2,
  "markdownTable": false,
  "filterCalloutColor": "blue"
}
await dv.view("Views/Filter Query/filtering_dv", input)
```

---
[[Recent Articles|Back to Recent Articles]]
