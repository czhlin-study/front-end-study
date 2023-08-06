## 提交规范

`git commit`信息规范,一般分为`feat`、`fix`、`chore`、`style`、`docs`五种类型

- `feat`一般用于提交新特性新功能
- `fix`一般用于修复代码问题如`issues`
- `chore`一般用于日常维护，比较杂的提交
- `style`一般用于更改样式，单纯调整样式更改主题颜色等
- `docs`一般用于更改文档，如`README`文件、其他的`markdown`文件

```bash
# 提交示例
git commit -m "fix: 修复代码问题"
```

## 目录结构

```
├─src
|  ├─views
|  |   └Home.vue
|  ├─docs
|  |  ├─getting-started.md
|  |  ├─readme.md
|  |  ├─hello
|  |  |   └readme.md
|  ├─components
|  |     ├─Example.vue
|  |     ├─HelloView
|  |     |     ├─Hello.tsx
|  |     |     └index.vue
```

> docs 目录下的默认文件是`readme.md`、`README.md`或`index.md`
> views 和 components 目录下的默认文件是`index.vue`

- `views`用来写复杂的`vue`页面
- `components`用来写通用的`vue`组件
- `docs`用来写学习文档

## `docs`文件的编写

### 头部

```js
---
lang: zh-CN //语言：中文
title: hello world!//标题
description: 第一个页面//简单描述
---
```

### 内容

可以使用`vue`的`<template></template>`和
`markdown`语法

```vue
你好， {{ msg }}_

<RedDiv>

_当前计数为： {{ count }}_

</RedDiv>

<button @click="count++">点我！</button>

<script setup>
import { h, ref } from "vue";

const RedDiv = (_, ctx) =>
  h(
    "div",
    {
      class: "red-div",
    },
    ctx.slots.default()
  );
const msg = "Markdown 中的 Vue";
const count = ref(0);
</script>

<style lang="scss">
.red-div {
  color: red;
}
</style>
```

可以直接使用`components`目录下的`.vue`组件。
`views`目录下的页面需要引入后再使用

> 例子：在`components`目录下有一个`HelloWorld.vue`
> 组件。在`views`目录下有一个`Home.vue`组件

```vue
## 使用components

<HelloWorld />

## 使用views

<Home />
<script setup>
import Home from "@/views/Home.vue";
</script>
```

### 为页面设置导航

> 在根目录下的`app.config.ts`下设置

- 为当前页设置[sidebar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar)
- 为当前页设置[navbar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar)

> 一般使用目录对文档内容进行分类

```
├─src
|  ├─docs
|  |  ├─javaScript
|  |  ├─html
|  |  ├─sass
|  |  ├─vite
....
```

> 对页面的`sidebar`、`navbar`进行配置

```js
{
 navbar: [
    {
      text: "JavaScript编程语言",
      link: "/javaScript/",
    },
    {
      text: "超文本标记语言",
      link: "/html/",
    }
  ],
  sidebar: {
    "/javaScript/": [
      {
        text: "JavaScript编程语言",
        children: ["/javaScript/readme.md", "/javaScript/xxx.md"],
      },
    ],
    "html":[]
  }
};
```
