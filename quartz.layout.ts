import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "masri-programmer/masri.blog",
        repoId: "R_kgDOONST2Q",
        category: "Announcements",
        categoryId: "DIC_kwDOONST2c4Co7lM",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Masri-Programmer/masri.blog",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Navigation(),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.RecentNotes({ showTags: false, filter: (f) => f.slug?.startsWith("Blog") ?? false }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.RecentNotes({
      limit: 7,
      showTags: false,
      title: "Recent Blog Posts",
      filter: (f) => f.slug?.startsWith("Blog") ?? false,
    }),
  ],
}

// export const HomeListPageLayout: SharedLayout = {
//   afterBody: [
//     Component.RecentNotes({
//       limit: 7,
//       title: "Recent Blog Posts",
//       filter: (f) => f.slug?.startsWith("Blog") ?? false,
//     }),
//   ],
// }
