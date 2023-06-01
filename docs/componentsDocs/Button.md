---
title: Button 按钮
---

# Button 按钮

常用的操作按钮。

---

### 基础用法

基础的按钮用法。

<Button-Demo1 />

> 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-row>
      <ml-button>默认按钮</ml-button>
      <ml-button type="primary">主要按钮</ml-button>
      <ml-button type="success">成功按钮</ml-button>
      <ml-button type="info">信息按钮</ml-button>
      <ml-button type="warning">警告按钮</ml-button>
      <ml-button type="danger">危险按钮</ml-button>
    </ml-row>

    <ml-row>
      <ml-button plain>朴素按钮</ml-button>
      <ml-button type="primary" plain>主要按钮</ml-button>
      <ml-button type="success" plain>成功按钮</ml-button>
      <ml-button type="info" plain>信息按钮</ml-button>
      <ml-button type="warning" plain>警告按钮</ml-button>
      <ml-button type="danger" plain>危险按钮</ml-button>
    </ml-row>

    <ml-row>
      <ml-button round>圆角按钮</ml-button>
      <ml-button type="primary" round>主要按钮</ml-button>
      <ml-button type="success" round>成功按钮</ml-button>
      <ml-button type="info" round>信息按钮</ml-button>
      <ml-button type="warning" round>警告按钮</ml-button>
      <ml-button type="danger" round>危险按钮</ml-button>
    </ml-row>

    <ml-row>
      <ml-button icon="ml-icon-search" circle></ml-button>
      <ml-button type="primary" icon="ml-icon-edit" circle></ml-button>
      <ml-button type="success" icon="ml-icon-check" circle></ml-button>
      <ml-button type="info" icon="ml-icon-message" circle></ml-button>
      <ml-button type="warning" icon="ml-icon-star-off" circle></ml-button>
      <ml-button type="danger" icon="ml-icon-delete" circle></ml-button>
    </ml-row>
  </div>
</template>
```

:::

---

### 禁用状态

按钮不可用状态。

<Button-Demo2 />

> 你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-row>
      <ml-button disabled>默认按钮</ml-button>
      <ml-button type="primary" disabled>主要按钮</ml-button>
      <ml-button type="success" disabled>成功按钮</ml-button>
      <ml-button type="info" disabled>信息按钮</ml-button>
      <ml-button type="warning" disabled>警告按钮</ml-button>
      <ml-button type="danger" disabled>危险按钮</ml-button>
    </ml-row>

    <ml-row>
      <ml-button plain disabled>朴素按钮</ml-button>
      <ml-button type="primary" plain disabled>主要按钮</ml-button>
      <ml-button type="success" plain disabled>成功按钮</ml-button>
      <ml-button type="info" plain disabled>信息按钮</ml-button>
      <ml-button type="warning" plain disabled>警告按钮</ml-button>
      <ml-button type="danger" plain disabled>危险按钮</ml-button>
    </ml-row>
  </div>
</template>
```

:::

---

### 文字按钮

没有边框和背景色的按钮。

<Button-Demo3 />

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-button type="text">文字按钮</ml-button>
    <ml-button type="text" disabled>文字按钮</ml-button>
  </div>
</template>
```

:::

---

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<Button-Demo4 />

> 设置 `icon` 属性即可，icon 的列表可以参考 [elementUI](https://element.eleme.cn/#/zh-CN/component/icon) 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 `i` 标签即可，可以使用自定义图标。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-button type="primary" icon="ml-icon-edit"></ml-button>
    <ml-button type="primary" icon="ml-icon-share"></ml-button>
    <ml-button type="primary" icon="ml-icon-delete"></ml-button>
    <ml-button type="primary" icon="ml-icon-search">搜索</ml-button>
    <ml-button type="primary"
      >上传<i class="ml-icon-upload ml-icon--right"></i
    ></ml-button>
  </div>
</template>
```

:::

---

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

<Button-Demo5 />

> 使用`<ml-button-group>`标签来嵌套你的按钮。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-button-group>
      <ml-button type="primary" icon="ml-icon-arrow-left">上一页</ml-button>
      <ml-button type="primary"
        >下一页<i class="ml-icon-arrow-right ml-icon--right"></i
      ></ml-button>
    </ml-button-group>
    <ml-button-group>
      <ml-button type="primary" icon="ml-icon-edit"></ml-button>
      <ml-button type="primary" icon="ml-icon-share"></ml-button>
      <ml-button type="primary" icon="ml-icon-delete"></ml-button>
    </ml-button-group>
  </div>
</template>
```

:::

---

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<Button-Demo6 />

> 要设置为 loading 状态，只要设置 `loading` 属性为 `true` 即可。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-button type="primary" :loading="true">加载中</ml-button>
  </div>
</template>
```

:::

---

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<Button-Demo7 />

> 额外的尺寸：`medium`、`small`、`mini`，通过设置 `size` 属性来配置它们。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-row>
      <ml-button>默认按钮</ml-button>
      <ml-button size="medium">中等按钮</ml-button>
      <ml-button size="small">小型按钮</ml-button>
      <ml-button size="mini">超小按钮</ml-button>
    </ml-row>
    <ml-row>
      <ml-button round>默认按钮</ml-button>
      <ml-button size="medium" round>中等按钮</ml-button>
      <ml-button size="small" round>小型按钮</ml-button>
      <ml-button size="mini" round>超小按钮</ml-button>
    </ml-row>
  </div>
</template>
```

:::

---

### Button 属性

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | --     |
| type        | 类型           | string  | primary / success / warning / danger / info / text | --     |
| plain       | 是否朴素按钮   | boolean | --                                                 | false  |
| round       | 是否圆角按钮   | boolean | --                                                 | false  |
| circle      | 是否圆形按钮   | boolean | --                                                 | false  |
| loading     | 是否加载中状态 | boolean | --                                                 | false  |
| disabled    | 是否禁用状态   | boolean | --                                                 | false  |
| icon        | 图标类名       | string  | --                                                 | --     |
| autofocus   | 是否默认聚焦   | boolean | --                                                 | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |

### Button 事件

| 事件名称 | 说明                 | 回调参数   |
| -------- | -------------------- | ---------- |
| click    | 按钮点击时触发的事件 | event 对象 |
