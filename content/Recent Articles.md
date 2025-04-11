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

- [[Blog/Coding/Frontend/War story the hardest bug I ever debugged.md|War story the hardest bug I ever debugged]]
- [[Blog/Coding/Frontend/JS/Understanding Tree Shaking in JavaScript A Comprehensive Guide.md|Understanding Tree Shaking in JavaScript A Comprehensive Guide]]
- [[Blog/Coding/Frontend/React/Top 5 React Stock Chart Libraries for 2025  Syncfusion Blogs.md|Top 5 React Stock Chart Libraries for 2025  Syncfusion Blogs]]
- [[Blog/Coding/Backend/EP157 How to Learn Backend Development.md|EP157 How to Learn Backend Development]]
- [[Blog/Personal/education.md|education]]

%% DATAVIEW_PUBLISHER: end %%



### 📚 Developer Knowledge Base



%% DATAVIEW_PUBLISHER: start
```dataview
LIST
FROM "Blog/Coding/Browser Bookmarks"
SORT file.mtime DESC LIMIT 5
```
%%

- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 3.md|Knowledge Base part 3]]
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 4.md|Knowledge Base part 4]]
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 5.md|Knowledge Base part 5]]
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 1.md|Knowledge Base part 1]]
- [[Blog/Coding/Browser Bookmarks/Knowledge Base part 2.md|Knowledge Base part 2]]

%% DATAVIEW_PUBLISHER: end %%

### Services


%% DATAVIEW_PUBLISHER: start
```dataview
LIST 
FROM "Services"
SORT file.mtime DESC LIMIT 5
```
%%
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
%% DATAVIEW_PUBLISHER: end %%


%% DATAVIEW_PUBLISHER: start
```dataview
TABLE value, file.link
FROM ""
WHERE value > 100
SORT value DESC
```
%%
%% DATAVIEW_PUBLISHER: end %%