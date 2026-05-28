# 00 Dashboard

> [!multi-column]
> > [!info] Navigation
> > [[10 Projects|🚀 Projects]]
> > [[20 Areas|🏢 Areas]]
> > [[30 Resources|📚 Resources]]
> > [[90 System|⚙️ System]]
>
> > [!todo] Today
> > ```dataview
> > TASK FROM "90 System/Daily Notes" WHERE !completed
> > ```

## 🚀 Active Projects
```dataview
TABLE deadline, priority
FROM "10 Projects"
WHERE status = "Active"
SORT deadline ASC
```

## 📝 Recent Notes
```dataview
LIST FROM "" WHERE file.name != this.file.name SORT file.mday DESC LIMIT 10
```
