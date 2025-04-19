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

- [[Blog/Coding/Backend/Laravel/Setting Up Command Shortcuts for Laravel Development.md|Setting Up Command Shortcuts for Laravel Development]]
- [[Blog/Coding/Backend/PHP/PHP is now the Smartest Choice for Web Dev in 2025.md|PHP is now the Smartest Choice for Web Dev in 2025]]
- [[Blog/Coding/Tools/Unleash Your Terminal Power Essential CLI and TUI Tools for Developers.md|Unleash Your Terminal Power Essential CLI and TUI Tools for Developers]]
- [[Blog/Coding/Tools/11 Essential Free Websites Every Developer Needs 🛠️.md|11 Essential Free Websites Every Developer Needs 🛠️]]
- [[Blog/Coding/Tools/Discover 10 free and indispensable tools that every web developer should bookmark to streamline debugging, API interactions, data handling, and more..md|Discover 10 free and indispensable tools that every web developer should bookmark to streamline debugging, API interactions, data handling, and more.]]

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
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 3.md|Knowledge Base part 3]]
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 4.md|Knowledge Base part 4]]

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