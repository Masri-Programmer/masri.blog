---
title: "Services Dashboard"
description: "A dynamic catalog of services and custom packages including pricing estimates."
tags:
  - services
  - pricing
  - dashboard
created: 2026-06-24
updated: 2026-06-24
author: Mohamad Masri
layout: default
status: published
---

# 💼 Services & Pricing Dashboard

> [!abstract] Dynamic Service Directory
> This dashboard dynamically queries all active services and packages in your vault. It scans notes in the `Services` folder and extracts pricing configurations dynamically.

---

## 🛠️ Current Offerings

```dataviewjs
let services = dv.pages('"Services"')
    .filter(p => p.file.name !== "index" && p.file.name !== "Website Costs Calculator" && p.file.name !== "Automation Services" && p.file.name !== "Services Dashboard");

dv.table(
    ["Service Offering", "Category", "Tags", "Starting Price"],
    services.map(p => {
        let priceStr = "Contact for Quote";
        if (p.prices && p.prices.length > 0) {
            let starter = p.prices[0];
            priceStr = `${starter.value} ${starter.currency} (${starter.billing_period})`;
        }
        return [p.file.link, p.category || "General", p.file.tags || "", priceStr];
    })
);
```

---
[[Services/index|Back to All Services]]
