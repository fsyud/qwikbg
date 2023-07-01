---
publishDate: 2023-02-02
title: Bookmarks-quick-search
excerpt: 定制私人浏览器插件，已提供书签插件快速搜索功能，以及背景添加事项
image: /images/blog/a-2.jpg
readingTime: 3
tags:
  - markdown
  - blog
  - extension
---

# 背景

书签太多,再次查找书签的时候要经历点击书签查找文件再去慢慢搜索。或者在浏览器里进入书签管理器，进行搜索。定制属于个人独一无二的浏览器插件，在这个模版尽情的去尝试吧！

**模板提供丰富的api等待您去开发**

- background
- content
- devtools
- newtab
- options
- panel
- popup

**后续还会加上便签的功能，请期待！**

# 设计

技术栈：React、ts
构建工具 vite

首先我们要想到我们想要的功能来自谷歌插件开发的哪些部分。

```
import packageJson from "./package.json";

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  icons: {
    "128": "icon-128.png",
  },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "icon-128.png",
  },
  devtools_page: "src/pages/devtools/index.html",
  background: { service_worker: "src/pages/background/index.js" },
  chrome_url_overrides: {
    newtab: "src/pages/newtab/index.html",
  },
  web_accessible_resources: [
    {
      resources: ["assets/js/*.js", "assets/css/*.css"],
      matches: ["*://*/*"],
    },
  ],
  permissions: ["storage", "bookmarks"],
};

export default manifest;
```

具体配置项自行 Google

**eg:**

- manifest_version Manifest Version 3 的缩写，它是 Chrome 扩展平台的最新迭代。它分享了引入 Manifest V3 的背景和原因以及平台未来的愿景（官方推荐）
- action 即插件在浏览器上的弹层
- background chrome_url_overrides 即我们设置的背景属性

...

可参考 <a href="https://developer.chrome.com/docs/extensions/mv3/manifest/" target="_blank">Manifest file format</a>

# 结尾

本项目完全开源 <a href="https://github.com/ligdy7/bookmarks-quick-search" target="_blank">github</a>

<!-- 你可在谷歌商店下载 <a href="https://github.com/ligdy7/bookmarks-quick-search" target="_blank">https://github.com/ligdy7/bookmarks-quick-search</a> -->

有问题可随时在联系作者

**未完待续。。。**

> 转载或者引用本文内容请注明来源及原作者

[[Top]](#top)
