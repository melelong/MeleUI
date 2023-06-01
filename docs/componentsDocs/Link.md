---
title: Link 文字链接
---

# Link 文字链接

文字超链接

### 基础用法

基础的文字链接用法。

<Link-Demo1 />

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-link href="https://mlement.mleme.io" target="_blank">默认链接</ml-link>
    <ml-link type="primary">主要链接</ml-link>
    <ml-link type="success">成功链接</ml-link>
    <ml-link type="warning">警告链接</ml-link>
    <ml-link type="danger">危险链接</ml-link>
    <ml-link type="info">信息链接</ml-link>
  </div>
</template>
```

:::

---

### 禁用状态

文字链接不可用状态。

<Link-Demo2 />

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-link disabled>默认链接</ml-link>
    <ml-link type="primary" disabled>主要链接</ml-link>
    <ml-link type="success" disabled>成功链接</ml-link>
    <ml-link type="warning" disabled>警告链接</ml-link>
    <ml-link type="danger" disabled>危险链接</ml-link>
    <ml-link type="info" disabled>信息链接</ml-link>
  </div>
</template>
```

:::

---

### 下划线

文字链接下划线。

<Link-Demo3 />

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-link disabled>默认链接</ml-link>
    <ml-link type="primary" disabled>主要链接</ml-link>
    <ml-link type="success" disabled>成功链接</ml-link>
    <ml-link type="warning" disabled>警告链接</ml-link>
    <ml-link type="danger" disabled>危险链接</ml-link>
    <ml-link type="info" disabled>信息链接</ml-link>
  </div>
</template>
```

:::

---
