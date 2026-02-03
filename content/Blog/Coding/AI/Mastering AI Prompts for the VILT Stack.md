---
title: VILT Stack Prompt Reference Guide
tags: [laravel, vue, inertia, tailwind, ai-prompts, dev-tools]
author: "Masri Blog"
description: "A comprehensive guide to prompting AI for Vue, Inertia, Laravel, and Tailwind projects to ensure production-ready code generation."
keywords:
  - VILT stack
  - Laravel prompt engineering
  - Vue.js composition api
  - Inertia.js
  - AI coding
date created: 2026-02-03
---
![[../../../Assets/Blog/Gemini_Generated_Image_xoqyx5xoqyx5xoqy.png]]
# 📘 VILT Stack Prompt Reference Guide

> [!SUMMARY] Overview
> This guide is a collection of system prompts and strategies designed to turn LLMs (ChatGPT, Claude, etc.) into expert Senior VILT Stack Engineers. It covers session initialization, structural templates, and debugging protocols.

## 1. 🚀 Session Initialization

**Usage:** Copy-paste this at the very start of a new chat to set the context and establishing coding standards.

> [!NOTE] The Protocol
> This sets strict rules for strict mode, typing, and mobile-first design.

```text
You are an expert Senior Full Stack Engineer specializing in the VILT stack (Vue.js 3 Composition API, Inertia.js, Laravel 11, Tailwind CSS).

Your Standards:
- Laravel: Follow modern best practices (Service/Action classes, Form Requests, Eloquent strict mode).
- Vue/Inertia: Use <script setup lang="ts">, Composables for logic reuse, and typed props.
- Tailwind: Use utility-first patterns, minimize arbitrary values (e.g., avoid w-[123px]), and ensure mobile-first responsiveness.
- Performance: Always consider N+1 queries (Eager Loading) and bundle size.

Protocol:
1. If a request involves data mutation, assume I need a Laravel Resource Controller and a corresponding Vue page.
2. Always type-hint PHP code and use TypeScript interfaces for Vue props where possible.
3. Output a brief 'Usage Example' or 'Route Definition' with your code.
````

---

## 2. 🧠 The Golden Structure (PTCF)

Use this framework to ensure you get production-ready code in a single turn.

|**Component**|**Definition**|**VILT Example**|
|---|---|---|
|**Persona**|Who is the AI?|"Act as a Senior Laravel Architect..."|
|**Task**|What do you need?|"...Create a polymorphic comment system..."|
|**Context**|Constraints|"...using Inertia for the frontend, Tailwind for styling, and ensure eager loading on the backend."|
|**Format**|Output style|"Output the Migration, Model, Controller, and Vue Component."|

### Prompt Template

Plaintext

```
Act as a [PERSONA]. I need you to [TASK].

Context: 
[CONTEXT - Specific VILT constraints, e.g., "Use Pinia for state", "Laravel 11 features"]

Format: 
[FORMAT - e.g., "Split into backend/frontend blocks", "File structure view"]
```

---

## 3. 🛠️ Core Strategy Templates

![[../../../Assets/Blog/Gemini_Generated_Image_mebg3mebg3mebg3m.png]]
### A. The "Consultant" (Q&A Strategy)

> [!TIP] Best For
> 
> Planning new features or complex database relationships.

Plaintext

```
I need to build a multi-tenant SaaS dashboard using the VILT stack. Before providing a solution, please ask me relevant questions about tenancy scope (single db vs multi db), authentication guards, and shared resources so you can give me the most appropriate implementation advice.
```

### B. The "Architect" (Pros & Cons Strategy)

> [!TIP] Best For
> 
> Making difficult architectural decisions or choosing packages.

Plaintext

```
I’m building a complex checkout flow in Inertia. Please analyze the pros and cons of using Pinia, standard Vue Composables, or Inertia's "remember" feature for managing the checkout state. Consider factors like persistence, complexity, and server-side validation errors.
```

### C. The "Step-by-Step" (Chain of Thought)

> [!TIP] Best For
> 
> Refactoring "Fat Controllers" or legacy code.

Plaintext

```
Help me refactor this large `StoreOrderController`. Go one step at a time.

1. First, extract validation into a FormRequest.
2. Second, move the business logic into an Action class or Service.
3. Third, clean up the Inertia response.

Do not move to the next step until I give the keyword ‘next’.
```

### D. The "Auditor" (Role Prompt)

> [!TIP] Best For
> 
> Security reviews and performance optimization.

Plaintext

```
Act as a Senior Security Engineer. Review this Laravel Controller and Vue Page. Identify vulnerabilities specifically related to:
1. Mass Assignment (fillable/guarded).
2. Inertia shared data leakage (exposing sensitive user data in props).
3. N+1 query issues in the Eloquent resource.
```

---

## 4. 🔗 Advanced Combined Strategies

### Role + Q&A (The DevOps Specialist)

Plaintext

```
Act as a Laravel Forge expert. I need to deploy my VILT application. Before providing a script, ask me questions about my build process (Vite vs Mix), queue workers (Horizon), and scheduler requirements so we can create a zero-downtime deployment script.
```

### Stepwise + Pros & Cons (The Migration Planner)

Plaintext

```
I need to migrate a legacy Blade view system to Vue/Inertia. Let's do this component by component.
1. Identify the shared layouts.
2. Convert the main listing table.

For each step, propose the best way to handle the data passing (Props vs API calls) and wait for my confirmation.
```

---

## 5. 🔄 Iterative Workflows

### The "Test-First" Approach (Pest PHP)

> [!CHECK] Workflow
> 
> Write the test first to ensure the AI understands the edge cases.

Plaintext

```
I need a `SubscribeUser` action. First, generate 3 Pest PHP test cases covering edge cases (already subscribed, invalid email, stripe API failure). Then, write the Action class to pass these tests.
```

### The "Self-Correction" Loop

> [!WARNING] Usage
> 
> Use this immediately after the AI generates code to catch common VILT mistakes.

Plaintext

```
Stop. Review the Vue component you just wrote.
1. Did you use the Composition API `<script setup>` syntax?
2. Are the Tailwind classes cluttered? If so, suggest extracting common patterns to `@apply` or components.
3. Is the Inertia `useForm` helper being used correctly for submission?

Fix these issues and show me V2.
```

---

## 6. 🐞 How to Debug VILT Errors

**Context is King.** Provide the stack trace **AND** the component state.

### The Debugging Template

Plaintext

```
I ran the code and got this error:
[PASTE LARAVEL LOG or BROWSER CONSOLE ERROR]

Here is the data coming from the Controller:
`return Inertia::render('Dashboard', ['users' => ...])`

And here is how I am accepting props in Vue:
`defineProps<{ users: User[] }>()`

My hypothesis is a serialization issue with the Eloquent collection, but I am not sure. Fix it.
```

---

## Useful VILT Shortcuts

- **Scaffold CRUD:** "Create a migration, model, factory, controller, and Vue/Tailwind index page for a Project resource."
    
- **Tailwind Cleanup:** "Refactor this HTML. It has too many utility classes. Group them logically or extract components for buttons/inputs."
    
- **Type Safety:** "Generate a TypeScript interface for this Eloquent Model, including its loaded relationships."
- 
![[../../../Assets/Blog/Gemini_Generated_Image_fy55gwfy55gwfy55.png]]