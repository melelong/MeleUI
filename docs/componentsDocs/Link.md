---
title: Link 文字链接
---

# Link 文字链接

文字超链接

---

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
    <ml-link :underline="false">无下划线</ml-link>
    <ml-link>有下划线</ml-link>
  </div>
</template>
```

:::

---

### 图标

带图标的文字链接可增强辨识度。

<Link-Demo4 />

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-link icon="ml-icon-edit">编辑</ml-link>
    <ml-link>查看<i class="ml-icon-view ml-icon--right"></i> </ml-link>
  </div>
</template>
```

:::

---

### Link 属性

| 参数      | 说明           | 类型    | 可选值                                      | 默认值  |
| --------- | -------------- | ------- | ------------------------------------------- | ------- |
| type      | 类型           | string  | primary / success / warning / danger / info | default |
| underline | 是否下划线     | boolean | --                                          | true    |
| disabled  | 是否禁用状态   | boolean | --                                          | false   |
| href      | 原生 href 属性 | string  | --                                          | --      |
| icon      | 图标类名       | string  | --                                          | --      |

### Link 事件

| 事件名称 | 说明                 | 回调参数   |
| -------- | -------------------- | ---------- |
| click    | 链接点击时触发的事件 | event 对象 |
