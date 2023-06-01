---
title: Dialog 对话框
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

---

### 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

<Dialog-Demo1 />

> 需要设置 `visible` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。Dialog `分为两个部分：body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。`title` 属性用于定义标题，它是可选的，默认值为空。

::: details 查看代码

```vue
<template>
  <div class="demoBlock">
    <ml-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</ml-button
    >

    <ml-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      @close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <ml-button @click="dialogVisible = false">取 消</ml-button>
        <ml-button type="primary" @click="dialogVisible = false"
          >确 定</ml-button
        >
      </span>
    </ml-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose() {
      window.alert('已关闭');
    },
  },
};
</script>
```

:::

---

### Dialog 属性

| 参数                  | 说明                                            | 类型    | 可选值 | 默认值 |
| --------------------- | ----------------------------------------------- | ------- | ------ | ------ |
| visible               | 是否显示 Dialog，支持 .sync 修饰符              | boolean | --     | false  |
| title                 | Dialog 的标题，也可通过具名 slot （见下表）传入 | string  | --     | --     |
| width                 | Dialog 的宽度                                   | string  | --     | 50%    |
| top                   | Dialog CSS 中的 margin-top 值                   | string  | --     | 15vh   |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog              | boolean | --     | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog                | boolean | --     | true   |
| show-close            | 是否显示关闭按钮                                | boolean | --     | true   |
| destroy-on-close      | 关闭时销毁 Dialog 中的元素                      | boolean | --     | false  |

### Dialog 插槽

| name    | 说明                    |
| ------- | ----------------------- |
| default | Dialog 的内容           |
| title   | Dialog 标题区的内容     |
| footer  | Dialog 按钮操作区的内容 |

### Dialog 事件

| 事件名称 | 说明                        | 回调参数 |
| -------- | --------------------------- | -------- |
| open     | Dialog 打开的回调           | --       |
| opened   | Dialog 打开动画结束时的回调 | --       |
| close    | Dialog 关闭的回调           | --       |
| closed   | Dialog 关闭动画结束时的回调 | --       |
