---
title: "Laravel Starter Kits: A New Beginning for Your Next Project - The Laravel Blog"
source: "https://blog.laravel.com/laravel-starter-kits-a-new-beginning-for-your-next-project?ref=dailydev"
author:
published:
created: 2025-03-25
description: "We’ve overhauled our starter kits, replacing Jetstream and Breeze with three distinct, purpose-built starter kits in Livewire, React, and Vue. These new kits allow you to focus on building your app instead of creating boilerplate code from scratch."
tags: Laravel, Starter Kits, Livewire, React, Vue, Inertia.js, Web Development, Frontend Development, Backend Development, Authentication, Boilerplate, Frameworks
---
## Laravel Starter Kits: A New Beginning for Your Next Project

Mar, 19 2025 — [#releases](https://blog.laravel.com/releases)[#news](https://blog.laravel.com/news)

We’ve overhauled our previous starter kits, replacing Jetstream and Breeze with three distinct, purpose-built starter kits. These new kits allow you to focus on building your app instead of creating boilerplate code from scratch.

Our starter kits currently have all the features you saw in the previous Breeze starter kit and we’re looking at adding more features like two-factor authentication (2FA) and teams functionality soon.

## What are the new Laravel starter kits?

These new starter kits are complete, ready-to-go applications that you can begin building on immediately. Unlike the previous packages that required installing into existing projects, these standalone starter kits will start a new project with **all of the code inside of your project from day one**.

The files can be found directly in your `app/` and `resources/` folders. You have the freedom to browse through your files and edit them as you see fit.

## Installing a starter kit

You can either use the [Laravel Installer](https://laravel.com/docs/12.x#installing-php) or clone the starter kit repo directly. We have starter kits for:

- Livewire ( [GitHub](https://github.com/laravel/livewire-starter-kit), [preview](https://livewire-starter-kit-main-spxvec.laravel.cloud/) )
- Inertia with React ( [GitHub](https://github.com/laravel/react-starter-kit), [preview](https://react-starter-kit-main-trfk6v.laravel.cloud/) )
- Inertia with Vue ( [GitHub](https://github.com/laravel/vue-starter-kit), [preview](https://vue-starter-kit-main-jvxppc.laravel.cloud/) )

Each starter kit comes with best practices for handling routing, controllers, views, and authentication. Even if you don’t have a project to start, feel free to peruse through the code in each starter kit.

### Each starter kit includes:

- A full authentication system (login, registration, password reset)
- User profile management
- Dark mode support
- Multiple layout options
- Tailwind CSS integration (Tailwind v4 for React and Livewire)

## Getting started with Laravel starter kits

Creating a new app with a starter kit only takes a second, use the Laravel installer:

```
laravel new
```

Need more help getting started? Check [out our documentation.](https://laravel.com/docs/12.x/starter-kits#creating-an-application)

If you’re ready to deploy your app, you can check out [Laravel Cloud](https://cloud.laravel.com/) where you can connect your repo and have your app live in 5 minutes.

## What's the difference between React, Vue, and Livewire Starter Kits?

While all three starter kits provide the same core functionality, they are different in how they implement the frontend.

Choose your starter kit based on if you want to use [Livewire](https://livewire.laravel.com/) or [Inertia.js](https://inertiajs.com/).

### React Starter Kit

The React Starter Kit is perfect for those with React experience who want to leverage React’s large ecosystem.

- Built on [React](https://react.dev/) and [Inertia.js](https://inertiajs.com/) for those who prefer React syntax
- Uses [shadcn/ui](https://ui.shadcn.com/) Tailwind v4 components for a polished UI
- Fully supports Tailwind v4
- [Read the docs on customization](https://laravel.com/docs/12.x/starter-kits#react-customization)

**Vue Starter Kit**

The Vue Starter Kit is perfect if you prefer Vue’s approachable syntax and single file components.

- Built on [Vue 3](https://vuejs.org/) and [Inertia.js](https://inertiajs.com/)
- Uses the [shadcn/ui](https://www.shadcn-vue.com/) Vue port for consistent components
- Great for projects where Vue's reactivity system and template syntax are preferred
- Currently uses Tailwind v3 (Tailwind v4 support coming soon)
- [Read the docs on customization](https://laravel.com/docs/12.x/starter-kits#vue-customization)

**Livewire Starter Kit**

Use the Livewire starter kit if you like Blade as a templating language and want to stay in PHP-land.

- Uses open source [Livewire Flux](https://fluxui.dev/) components for a modern interface
- Livewire Flux has released a free tier of components that are being used for this starter kit
- Ideal for those who prefer writing PHP and Laravel Blade over JavaScript
- Fully supports Tailwind 4
- [Read the docs on customization](https://laravel.com/docs/12.x/starter-kits#livewire-customization)

## How are new Laravel starter kits different from Jetstream and Breeze?

It's always been a tough choice choosing between Breeze or Jetstream for new projects. Jetstream is popular for its built-in teams functionality but Breeze’s approach of giving you access to all your files was well-loved by many devs.

So, how are they different?

**1\. A complete application out of the box**

Jetstream and Breeze were packages that published files into an existing application

**2\. A simpler approach, more straightforward approach**

Rather than offering a "choose your own adventure" approach like Breeze did, each kit is dedicated to a single frontend stack.

**3\. Easier customization**

Since all code lives directly in your application, customization is more straightforward without worrying about package updates.

**4\. Feature parity**

All new starter kits have feature parity with Breeze, providing the basics of authentication and user settings.

**5\. Modern frontend libraries**

Each kit leverages modern component libraries (shadcn for React/Vue, Flux for Livewire). This may seem more complex at first, but these solutions provide a robust component library that you can customize for your styles and project structure.

## Optional features for each starter kit

We also offer options that you can add to your applications if you choose. Each of these additions are available no matter which kit you choose.

- **Email verification**: Configurable with the `MustVerifyEmail` interface that you can add to your User model.
- **Password confirmation**: Available through the `password.confirm` middleware
- **WorkOS integration**: Available as an installation option to choose to use a 3rd party provider to handle authentication. The starter kits default to Laravel’s built-in authentication systems. The WorkOS option is only if you want to pass authentication to a separate provider.

## Where is the Laravel Blade Starter Kit?

Currently, there is no dedicated first-party Blade-only starter kit. The Livewire starter kit is the closest option as it uses Blade templates with Livewire's dynamic functionality.

If you prefer using plain Blade without Livewire, we recommend starting with the Livewire starter kit and removing the Livewire components or modify them to use standard Blade templates.

## Custom Starter Kits

In addition to the official starter kits that you can install using the Laravel installer, you can use the new `--using` flag to use any [community maintained starter kits](https://laravel.com/docs/12.x/starter-kits#community-maintained-starter-kits) for your new Laravel project.

```
laravel new --using=devdojo/wave
```

[Tony Lea](https://x.com/tnylea), an open source engineer here at Laravel, has created a [directory for community starter kits](https://github.com/tnylea/laravel-new). Feel free to create your own and submit as a community starter kit.

## What's Next

Laravel's new Starter Kits represent a new way to start Laravel applications: **cloneable repositories where you own all the code from day one**.

Whether you prefer Livewire/Blade, React, or Vue, we hope these starter kits help you build out your Laravel applications faster.

We’re planning on expanding the features in these starter kits over time and can’t wait to see what you build.

Feedback on our starter kits? Let us know at [@laravelphp](https://x.com/laravelphp) or [open a PR](https://github.com/orgs/laravel/repositories?q=starter+kit). For peer support, [join the Laravel Discord](https://discord.gg/ydWGkTXp) and post in #help.

Happy shipping!

  

By Chris Sev

Director of Dev Rel

Follow the [RSS Feed](https://blog.laravel.com/feed).