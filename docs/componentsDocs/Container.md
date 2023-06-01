---
title: Container 布局容器
---

# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构，还提供了 tag 属性来自定义元素标签，可以结合语义化标签来使用。

`<ml-container>`：外层容器。当子元素中包含 `<ml-header>` 或 `<ml-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<ml-header>`：顶栏容器。

`<ml-aside>`：侧边栏容器。

`<ml-main>`：主要区域容器。

`<ml-footer>`：底栏容器。

> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<ml-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<ml-container>`。

---

### 常见页面布局

<Container-Demo1 />

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-container>
      <ml-header>Header</ml-header>
      <ml-main>Main</ml-main>
    </ml-container>

    <ml-container>
      <ml-header>Header</ml-header>
      <ml-main>Main</ml-main>
      <ml-footer>Footer</ml-footer>
    </ml-container>

    <ml-container>
      <ml-aside width="200px">Aside</ml-aside>
      <ml-main>Main</ml-main>
    </ml-container>

    <ml-container>
      <ml-header>Header</ml-header>
      <ml-container>
        <ml-aside width="200px">Aside</ml-aside>
        <ml-main>Main</ml-main>
      </ml-container>
    </ml-container>

    <ml-container>
      <ml-header>Header</ml-header>
      <ml-container>
        <ml-aside width="200px">Aside</ml-aside>
        <ml-container>
          <ml-main>Main</ml-main>
          <ml-footer>Footer</ml-footer>
        </ml-container>
      </ml-container>
    </ml-container>

    <ml-container>
      <ml-aside width="200px">Aside</ml-aside>
      <ml-container>
        <ml-header>Header</ml-header>
        <ml-main>Main</ml-main>
      </ml-container>
    </ml-container>

    <ml-container>
      <ml-aside width="200px">Aside</ml-aside>
      <ml-container>
        <ml-header>Header</ml-header>
        <ml-main>Main</ml-main>
        <ml-footer>Footer</ml-footer>
      </ml-container>
    </ml-container>
  </div>
</template>
<style lang="scss" scoped>
.ml-header,
.ml-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.ml-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.ml-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .ml-container {
  margin-bottom: 40px;
}

.ml-container:nth-child(5) .ml-aside,
.ml-container:nth-child(6) .ml-aside {
  line-height: 260px;
}

.ml-container:nth-child(7) .ml-aside {
  line-height: 320px;
}
</style>
```

:::

---

### Container 属性

| 参数      | 说明             | 类型   | 可选值                | 默认值                                                             |
| --------- | ---------------- | ------ | --------------------- | ------------------------------------------------------------------ |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 ml-header 或 ml-footer 时为 vertical，否则为 horizontal |
| tag       | 自定义元素标签   | string | \*                    | div                                                                |

### Header 属性

| 参数   | 说明           | 类型   | 可选值 | 默认值 |
| ------ | -------------- | ------ | ------ | ------ |
| height | 顶栏高度       | string | --     | 60px   |
| tag    | 自定义元素标签 | string | \*     | div    |

### Aside 属性

| 参数  | 说明           | 类型   | 可选值 | 默认值 |
| ----- | -------------- | ------ | ------ | ------ |
| width | 侧边栏宽度     | string | --     | 300px  |
| tag   | 自定义元素标签 | string | \*     | div    |

### Footer 属性

| 参数   | 说明           | 类型   | 可选值 | 默认值 |
| ------ | -------------- | ------ | ------ | ------ |
| height | 底栏高度       | string | --     | 60px   |
| tag    | 自定义元素标签 | string | \*     | div    |
