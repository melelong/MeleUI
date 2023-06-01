---
title: Radio 单选框
---

# Radio 单选框

在一组备选项中进行单选

---

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<Radio-Demo1 />

> 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label` 属性的值，`label` 可以是`String`、`Number`或`Boolean`。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-radio v-modml="radio" labml="1">备选项</ml-radio>
    <ml-radio v-modml="radio" labml="2">备选项</ml-radio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
    };
  },
};
</script>
```

:::

---

### 禁用状态

单选框不可用的状态。

<Radio-Demo2 />

> 只要在 `ml-radio` 元素中设置 `disabled` 属性即可，它接受一个 `Boolean`，`true` 为禁用。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-radio disabled v-model="radio" label="禁用">备选项</ml-radio>
    <ml-radio disabled v-model="radio" label="选中且禁用">备选项</ml-radio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '选中且禁用',
    };
  },
};
</script>
```

:::

---

### 单选框组

适用于在多个互斥的选项中选择的场景

<Radio-Demo3 />

> 结合 `ml-radio-group` 元素和子元素 `ml-radio` 可以实现单选组，在 `ml-radio-group` 中绑定 `v-model`，在 `ml-radio` 中设置好 `label` 即可，无需再给每一个 `ml-radio` 绑定变量，另外，还提供了 `input` 事件来响应变化，它会传入一个参数 `value`。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-radio-group v-model="radio">
      <ml-radio :label="3">备选项</ml-radio>
      <ml-radio :label="6">备选项</ml-radio>
      <ml-radio :label="9">备选项</ml-radio>
    </ml-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: 3,
    };
  },
};
</script>
```

:::

---

### 带有边框

<Radio-Demo4 />

> 设置`border`属性可以渲染为带有边框的单选框。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <div>
      <ml-radio v-model="radio1" label="1" border>备选项1</ml-radio>
      <ml-radio v-model="radio1" label="2" border>备选项2</ml-radio>
    </div>
    <div style="margin-top: 20px">
      <ml-radio v-model="radio2" label="1" border size="medium"
        >备选项1</ml-radio
      >
      <ml-radio v-model="radio2" label="2" border size="medium"
        >备选项2</ml-radio
      >
    </div>
    <div style="margin-top: 20px">
      <ml-radio-group v-model="radio3" size="small">
        <ml-radio label="1" border>备选项1</ml-radio>
        <ml-radio label="2" border disabled>备选项2</ml-radio>
      </ml-radio-group>
    </div>
    <div style="margin-top: 20px">
      <ml-radio-group v-model="radio4" size="mini" disabled>
        <ml-radio label="1" border>备选项1</ml-radio>
        <ml-radio label="2" border>备选项2</ml-radio>
      </ml-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1',
    };
  },
};
</script>
```

:::

---

### Radio 属性

| 参数            | 说明                                 | 类型                      | 可选值                | 默认值 |
| --------------- | ------------------------------------ | ------------------------- | --------------------- | ------ |
| value / v-model | 绑定值                               | string / number / boolean | --                    | --     |
| label           | Radio 的 value                       | string / number / boolean | --                    | --     |
| disabled        | 是否禁用                             | boolean                   | --                    | false  |
| border          | 是否显示边框                         | boolean                   | --                    | false  |
| size            | Radio 的尺寸，仅在 border 为真时有效 | string                    | medium / small / mini | --     |
| name            | 原生 name 属性                       | string                    | --                    | --     |

### Radio 事件

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| input    | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

### Radio-group 属性

| 参数            | 说明                                  | 类型                      | 可选值                | 默认值 |
| --------------- | ------------------------------------- | ------------------------- | --------------------- | ------ |
| value / v-model | 绑定值                                | string / number / boolean | --                    | --     |
| size            | 单选框组尺寸，仅带有边框的 Radio 有效 | string                    | medium / small / mini | --     |
| disabled        | 是否禁用                              | boolean                   | --                    | false  |

### Radio-group 事件

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| input    | 绑定值变化时触发的事件 | 选中的 Radio label 值 |
