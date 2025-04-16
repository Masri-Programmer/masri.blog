---
tags:
  - post
  - articles
  - recent
---

### ✍️ Blog & Tutorials


%% DATAVIEW_PUBLISHER: start
```dataview
LIST 
FROM "Blog"
SORT file.mtime DESC LIMIT 5
```
%%

- [[Blog/Clippings/Unlock Software Mastery Foundational CS Papers Every Developer Should Read.md|Unlock Software Mastery Foundational CS Papers Every Developer Should Read]]
- [[Blog/Clippings/Level Up Your Workflow 10 Must-Have Dev Resources 🛠️.md|Level Up Your Workflow 10 Must-Have Dev Resources 🛠️]]
- [[Blog/Highlights.md|Highlights]]
- [[Blog/Coding/Unlocking Engineering Wisdom 13 Laws Every Developer Should Know.md|Unlocking Engineering Wisdom 13 Laws Every Developer Should Know]]
- [[Blog/Coding/Tools/Boosting Developer Experience Key Tools for 2025.md|Boosting Developer Experience Key Tools for 2025]]

%% DATAVIEW_PUBLISHER: end %%



### 📚 Developer Knowledge Base



%% DATAVIEW_PUBLISHER: start
```dataview
LIST
FROM "Blog/Coding/Browser Bookmarks"
SORT file.mtime DESC LIMIT 5
```
%%

- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 6.md|Knowledge Base part 6]]
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 1.md|Knowledge Base part 1]]
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 2.md|Knowledge Base part 2]]
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 4.md|Knowledge Base part 4]]
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 5.md|Knowledge Base part 5]]

%% DATAVIEW_PUBLISHER: end %%

### Services


%% DATAVIEW_PUBLISHER: start
```dataview
LIST 
FROM "Services"
SORT file.mtime DESC LIMIT 5
```
%%

- [[Services.md|Services]]

%% DATAVIEW_PUBLISHER: end %%



%% DATAVIEW_PUBLISHER: start
```dataview
LIST file.link
FROM #clippings   AND #AI 
SORT file.mtime DESC
```
%%



%% DATAVIEW_PUBLISHER: end %%


%% DATAVIEW_PUBLISHER: start
```dataview
TABLE date, file.link
FROM ""
WHERE date >= date("2025-03-03") AND date <= date("2025-04-04")
SORT date DESC
```
%%

| File | date | file.link |
| ---- | ---- | --------- |

%% DATAVIEW_PUBLISHER: end %%


%% DATAVIEW_PUBLISHER: start
```dataview
TABLE value, file.link
FROM ""
WHERE value > 100
SORT value DESC
```
%%

| File | value | file.link |
| ---- | ----- | --------- |

%% DATAVIEW_PUBLISHER: end %%