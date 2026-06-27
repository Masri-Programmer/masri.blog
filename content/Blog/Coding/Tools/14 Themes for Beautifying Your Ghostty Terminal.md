---
title: "14 Themes for Beautifying Your Ghostty Terminal"
source: "https://itsfoss.com/ghostty-themes/?ref=dailydev"
author:
  - "Sreenath"
published: 2025-09-08
created: 2025-09-18
description: "Learn to customize the famed Ghostty terminal with new themes. Learn about using the in-built ones as well as the external ones."
tags:
  - "clippings"
---

[![Warp Terminal](https://itsfoss.com/assets/images/warp.webp)](https://www.warp.dev/?utm_source=its_foss&utm_medium=display&utm_campaign=linux_launch)

Ghostty has recently emerged as a highly popular terminal emulator, gaining a strong following among developers and power users alike. This rapid rise can be attributed to its impressive performance and a rich feature set, like leveraging GPU acceleration for incredibly fast rendering and a smooth user experience, even with demanding tasks.

Performance is one thing. Ghostty also comes with a comprehensive theming system, offering a vast collection of built-in themes, which can also be previewed even before you apply them. That's cool. That's a really cool feature.

After [fiddling with Kitty terminal](https://itsfoss.com/kitty-customization/), I am exploring [Ghostty](https://ghostty.org/) terminal these days and decided to share some of my exploits on It's FOSS.

And hence this article, where I'll show how you can change themes in the Ghostty terminal, even the external ones. Later, I'll share some of my favorite Ghostty themes that will make your terminal both aesthetically pleasing and extremely readable.

## But first, learn to preview a theme in Ghostty

Ghostty has a neat theme preview system built-in. Open the terminal and run:

```
ghostty +list-themes
```

This opens the theme preview, from **which you can note the name of a theme you like**. You cannot set a theme from here but if you have the name, you can use it in the config as I show in the next section.

<video src="https://itsfoss.com/content/media/2025/09/ghostty-theme-preview.mp4" width="1252" height="690"></video>

Monokai Classic

Use the `/` key to start a search. Press Ctrl+C to close the theme preview.

💡

you can also use another terminal emulator to preview Ghostty themes.

Ghostty has relatively straight-forward text-based configuration. All you need is a configuration file called `config` at `~/.config/ghostty`.

Create this file if it does not exist.

```
mkdir -p ~/.config/ghostty
nano ~/.config/ghostty/config
```

Add the name of the theme of your choice in the following manner:

```
theme = "<name-of-the-theme>"
```

Save the file. Restart the Ghostty terminal to see the theme effect.

Quotes are needed for themes that have spaces in their names. An example:

```
theme = "Apple Classic"
```

Let's see it in action where I change the Ghostty theme to Apple Classic.

<video src="https://itsfoss.com/content/media/2025/09/change-theme-ghostty.mp4" width="1252" height="690"></video>

Monokai Classic

💡

You can also set light and dark theme choices so that it changes with your system theme:  
  
`theme = dark:ayu,light:ayu_light`

## What about external themes?

Didn't spot the theme of your choice in Ghostty built-in? You can download a color scheme of your choice or create one from scratch!

The condition is that the theme files should be present in the `~/.config/ghostty/themes` directory.

Once the theme file is placed in its location, open the Ghostty config file and add the line in the same manner:

```
theme = "<theme-file-name>"
```

🚧

Avoid using external theme configs file blindly. Because, themes can modify any Ghostty options.

## Restoring the default theme

Don't like the theme you changed to and want to go back to the original default theme instead of trying random themes until you find a suitable one? All you have to do is to revert the changes you made earlier.

How do you do that? Just remove the `theme = theme-name` from the `~/.config/ghostty/config` file. Or, just comment it out by adding # in front of that line.

## Cool Ghostty Themes

Now that you are familiar with the basics, let's see some cool Ghostty themes I like and perhaps you can give them a try.

### 1\. Monokai Classic

Monokai Classic is a visually pleasing color scheme that is pretty popular among developers. If you like colored terminals with syntax highlighting and fun Linux tools such as `eza`, Monokai Classic is a must-checkout theme.

![A screenshot of Ghostty with Monokai Classic. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/monokai-classic.png)

Monokai Classic

Theme code:

```
theme = "Monokai Classic"
```

### 2\. Monokai Pro

Yes, when it comes to standout colors, Monokai variants just excel. No wonder developers often use these themes frequently. Monokai Pro is an enhanced version of the classic Monokai theme with refined colors and improved contrast for professional development work.

![A screenshot of Ghostty with Monokai Pro. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/monokai-pro.png)

Monokai Pro

Theme code:

```
theme = "Monokai Pro"
```

### 3\. ayu

A minimalist dark theme with subtle red and blue accents, designed for extended coding sessions with reduced eye strain. If you use prompts like Starship or tools like Ohmyzsh, this theme does a pretty good job with the colors.

![A screenshot of Ghostty with ayu dark. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/ayu.png)

ayu

Theme code:

```
theme = ayu
```

### 4\. GitHub Dark Default

For those who use GitHub so often and love the default color schemes used in GitHub, this is a nice choice to consider. The scheme focuses on better contrast, and the dark mode blends pretty neatly with the rest of the colors.

![A screenshot of Ghostty with GitHub Dark Default. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/github-dark-default.png)

GitHub Dark Default

Theme code:

```
theme = GitHub-Dark-Default
```

### 5\. Catppuccin Mocha

Who doesn't love the [Catppuccin themes](https://catppuccin.com/)? What makes Catppuccin special is its consistency across development tools; you can theme your entire workflow with matching colors, creating a cohesive and calming development environment.

In Ghostty, you can install this theme with just one line in your config.

If you are using Starship, go for the [Catppuccin](https://starship.rs/presets/catppuccin-powerline) Mocha preset.

![A screenshot of Ghostty with Catppuccin Mocha. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/catppuccin-mocha.png)

Catppuccin Mocha

Theme code:

```
theme = catppuccin-mocha
```

### 6\. Desert

Desert is not a super dark theme; it is more like a warm dark theme with a matching color palette. You still get pretty neat contrast colors for better syntax highlighting and readability. The [Starship Gruvbox](https://starship.rs/presets/gruvbox-rainbow) prompt theme is a perfect prompt match for this theme.

![A screenshot of Ghostty with Desert theme. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/desert.png)

Desert

Theme code:

```
theme = Desert
```

### 7\. Nordfox

Nord theme has a special fan following! Like Catppuccin, the Nord color scheme also has a wide presence across many tools. So, if you are one looking to build a unique work environment, Nordfox is an interesting choice.

![A screenshot of Ghostty with Nordfox. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/nordfox.png)

Nordfox

Theme code:

```
theme = nordfox
```

### 8\. Adwaita Dark

If you are a GNOME user, this can be the best theme to choose for a cohesive desktop experience. Given you like Vanilla GNOME, this theme will match your system perfectly and look consistent across all your applications.

![A screenshot of Ghostty with Adwaita Dark. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/adwaita-dark.png)

Adwaita Dark

Theme code:

```
theme = "Adwaita Dark"
```

### 9\. Synthwave

A fun, dark theme with some bright neon color palettes. It's perfect if you want your terminal to look cool while coding games or creative projects.

![A screenshot of Ghostty with Synthwave theme. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/synthwave.png)

Synthwave

Theme code:

```
theme = synthwave
```

### 10\. Ayu Light

The light version of the `ayu` theme. It has clean whites and soft colors that work well in bright rooms or during daytime coding.

![A screenshot of Ghostty with ayu light. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/ayu-light.png)

ayu\_light

Theme code:

```
theme = ayu_light
```

### 11\. Primary

A simple, clean light theme focused on clarity. It's great for reading documentation or any work where you need crystal-clear text. It is challenging to create a perfectly read-friendly light theme, and Primary has done a fantastic job with the color choices.

![A screenshot of Ghostty with Primary light theme. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/primary-light.png)

primary

Theme code:

```
theme = primary
```

### 12\. Tinacious Design Light

This is some creative color choice to select. Especially the blue ones, which, if not chosen correctly, can easily make text unreadable in a white background. But this theme has all done well with the colors. It should be one of the choices for bright theme lovers!

![A screenshot of Ghostty with Tinacious Design Light theme. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/tinacious-design-light.png)

Tinacious Design (Light)

Theme code:

```
theme = "Tinacious Design (Light)"
```

### 13\. Catppuccin Latte

Light or dark, Catppuccin is unavoidable. Latte is the only light theme variant from Catppuccin, and to me, this appears to have more identifiable colors than the dark one. Each color is perfectly visible in all cases. I suggest you use the Catppuccin starship preset theme along with this for a proper terminal experience.

![A screenshot of Ghostty with Catppuccin Latte. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/catppuccin-latte-light.png)

Catppuccin Latte

Theme code:

```
theme = catppuccin-latte
```

### 14\. One Half Light

A balanced light theme that's bright but not harsh. The colors are chosen carefully so you can read for long periods without eye strain.

![A screenshot of Ghostty with OneHalfLight. The theme is dsiplayed in the theme preview section of Ghostty.](https://itsfoss.com/content/images/2025/09/onehalflight.png)

OneHalfLight

Theme code:

```
theme = OneHalfLight
```

## Wrapping Up

Ghostty provides plenty of built-in themes, as you can see from the first section. You can set any theme, even a custom-designed one.

Most of the themes provided by Ghostty are beautiful-looking, and if you scroll through them one at a time, you can find some eccentric color choices as well!

If you are a [Kitty](https://itsfoss.com/kitty-customization/) user, you may recall the `kitten themes` command to get a similar interactive theme selector. But, in Kitty, you can easily press enter on a theme to modify the config and apply the theme. That handy feature is absent here, unfortunately.

I let you experiment with Ghostty themes and if you are interested, you can also explore some [beautiful themes for VS Code](https://itsfoss.com/vs-code-themes/) 😸