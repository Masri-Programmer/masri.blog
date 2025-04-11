---
title: "EP157: How to Learn Backend Development?"
source: "https://blog.bytebytego.com/p/ep157-how-to-learn-backend-development?ref=dailydev"
author:
  - "[[ByteByteGo]]"
published: 2023-04-19
created: 2025-04-11
description: "Backend Development requires knowledge of multiple aspects. Here’s a mind map of what all things a developer should learn:"
tags:
  - "clippings"
---
## WorkOS Radar: Smarter protection with device fingerprinting (Sponsored)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1bbc473c-ec97-44f5-8419-30cff0baabf9_1600x900.heic)

WorkOS Radar leverages advanced device fingerprinting to protect your platform from fraudulent activity, including fake signups, throwaway emails, and brute-force attacks.

With WorkOS Radar, you can:

- Identify and challenge suspicious activity before it impacts your platform
- Prevent free-tier abuse and fraudulent access with precision detection
- Tailor threat detection and mitigation to fit your app’s exact needs

Stay ahead of evolving threats and uphold privacy standards with WorkOS Radar’s cutting-edge security solution.

This week’s system design refresher:

- Why Everyone’s Talking About MCP? (Youtube video)
- How to Learn Backend Development?
- A Simplified Git Workflow
- Virtualization vs Containerization
- How Netflix Built a Distributed Counter?
- SPONSOR US

## Why Everyone’s Talking About MCP?

## How to Learn Backend Development?

![No alternative text description for this image](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2a933717-1d59-46a6-ba51-76e24ae048fc_1280x1502.gif)

No alternative text description for this image

Backend Development requires knowledge of multiple aspects. Here’s a mind map of what all things a developer should learn:

1. Fundamentals  
	This includes topics like backend vs frontend, client-server, DNS, etc.
2. Backend Programming Languages  
	Choose between one or more programming languages like Java, Python, JS, Go, Rust, and C#.
3. Databases  
	This includes topics like types of databases such as SQL (Postgres, MySQL, SQLite), NoSQL (MongoDB, Firebase, DynamoDB), NewSQL (CockroachDB, Spanner). Other topics include working with ORMs and Database Caching.
4. APIs and Web Services  
	Learn about API types (REST, GraphQL, gRPC, SOAP) and authentication techniques (like JWT, OAuth 2, API keys).
5. Server and Hosting  
	This involves topics like backend hosting services (AWS, Azure, GCP), Containerization using Docker & Kubernetes, and Server Setup for Nginx, Apache, etc.
6. DevOps  
	Learn about CI/CD Pipelines using GitHub Actions and Jenkins, IaC (Terraform, Ansible) and Monitoring with tools like Prometheus, Grafana, ELK.

Over to you: What else will you add to the list for learning backend development?

## A Simplified Git Workflow

Learning Git is one of the fundamental skills for every developer out there. Here are the steps within a simple and basic Git workflow.

![No alternative text description for this image](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb9397d70-0232-4a8b-8b3e-edd4c15eb9bb_800x939.gif)

No alternative text description for this image

1. Developer’s Working Directory (Untracked) to Staging Area (Index)  
	The command for the same is “git add”. The files go from untracked to staged.
2. Staging Area to Local Repository (Head)  
	The command for this move is “git commit -m “message””. It saves changes to the local repository (HEAD), marking a version history.
3. Local Repository to Remote Repository (Remote)  
	The command for this move is “git push”. It uploads the committed changes to the remote repository (such as on GitHub) for collaboration.
4. Remote Repository to Local Repository  
	The commands “git pull” and “git fetch” help with this. “git pull” updates local files with remote changes. On the other hand, “git fetch” retrieves remote changes but does not merge them. The command “git merge” combines changes from different branches.
5. Checking the Differences  
	The command “git diff HEAD” shows the differences between the developer's working directory and the latest commit.

Over to you: Which other step do you follow in your Git workflow?

## Virtualization vs Containerization

![graphical user interface](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1bc9340f-de4f-4767-b2f8-f4c6529e9eea_1309x1536.gif)

graphical user interface

Virtualization creates multiple VMs on a single physical server, each with its operating system, using a hypervisor.  
  
Containerization is a lightweight virtualization method that runs applications in isolated environments (containers) sharing the same operating system.  
  
Let’s look at the different possibilities in more detail.

1. Bare Metal: Applications run directly on the operating system. No virtualization or containerization is used. It provides high performance but lacks flexibility.
2. Virtualized: Uses a hypervisor to create VMs. Each VM has its guest OS, making it heavier on resources. Provides strong isolation but adds overhead.
3. Containerized: Uses a container engine instead of a hypervisor. Containers share the host operating system, making them lightweight and efficient. It is faster and more scalable than VMs.
4. Containerized on Virtualized: Runs containers inside VMs. Provides both flexibility and isolation, common in hybrid cloud environments. It balances resource efficiency with security.

Over to you: Have you used VMs and Containers to deploy workloads?

## How Netflix Built a Distributed Counter?

![No alternative text description for this image](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1e7afaab-de4b-4604-a557-22974fb2e3ea_1280x1532.gif)

No alternative text description for this image

A Distributed Counter is a system where the responsibility of counting events is spread across multiple servers or nodes in a network. Netflix needs to track and measure multiple user interactions to make real-time decisions and optimize its infrastructure.

For this reason, they built a Distributed Counter Abstraction.

Netflix’s Distributed Counter Abstraction operates in four main layers, ensuring high performance, scalability, and eventual consistency.

1. Client API Layer  
	Users interact with the system by sending AddCount, GetCount, or ClearCount requests. The Netflix Data Gateway efficiently processes and routes these requests.
2. Event Logging and TimeSeries Storage  
	Events are stored in Netflix TimeSeries Abstraction for scalability. Each event is tagged with an Event ID to ensure idempotency. To avoid database contention, events are grouped into time partitions known as buckets. Data is stored in Cassandra.
3. Rollup Pipeline or Aggregation  
	Rollup Queues collect event changes and process them in batches. Aggregation occurs in immutable time windows, ensuring accurate rollup calculations. Data is stored in the Cassandra Rollup Store for eventual consistency.
4. Read Optimization (Cache & Query Handling)  
	Aggregated counter values are cached in EVCache for ultra-fast reads. If a cache value is stale, a background rollup refresh updates it. This model allows Netflix to process 75K requests per second with single-digit millisecond latency.

Reference: [Netflix’s Distributed Counter Abstraction](https://netflixtechblog.com/netflixs-distributed-counter-abstraction-8d0c45eb66b2)

## SPONSOR US

Get your product in front of more than 1,000,000 tech professionals.

Our newsletter puts your products and services directly in front of an audience that matters - hundreds of thousands of engineering leaders and senior engineers - who have influence over significant tech decisions and big purchases.

Space Fills Up Fast - Reserve Today

Ad spots typically sell out about 4 weeks in advance. To ensure your ad reaches this influential audience, reserve your space now by emailing **[sponsorship@bytebytego.com](https://blog.bytebytego.com/p/)**.