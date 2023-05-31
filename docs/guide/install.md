---
title: 安装
---

# 安装

### npm 安装

---

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```bash
npm i mele-ui
```

### 使用 vue-cli

---

::: warning 注意
请确保你的 vue-cli 版本 <= 4
:::

### 引入组件库

---

本组件库支持`完整引入`和`按需引入`。

#### 完整引入

在入口文件 `main.js` 中引入

```js
import Vue from 'vue';
import Ml from 'mele-ui';
import 'mele-ui/dist/theme-chalk/index.css';
import App from './App.vue';

Vue.use(Ml);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
```

#### 按需引入

在入口文件 `main.js` 中引入

```js
import Vue from 'vue';
// 引入卡片组件
import { MlCard } from 'mele-ui';
// 引入卡片组件样式
import 'mele-ui/dist/theme-chalk/card.css';
import App from './App.vue';

// 注册卡片组件
Vue.use(MlCard);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
```

完整组件列表和引入方式(完整组件列表以 `node_modules/mele-ui/examples/assets/theme-chalk/index.scss` 引入的组件样式为准)

```js
import Vue from 'vue';
import {
  MlCol,
  MlRow,
  MlContainer,
  MlHeader,
  MlAside,
  MlMain,
  MlFooter,
  MlIcon,
  MlButton,
  MlButtonGroup,
  MlLink,
  MlRadio,
  MlRadioGroup,
  MlDialog,
  MlCard,
} from 'mele-ui';
// 引入样式
import 'mele-ui/dist/theme-chalk/index.css';
import App from './App.vue';
const components = [
  MlCol,
  MlRow,
  MlContainer,
  MlHeader,
  MlAside,
  MlMain,
  MlFooter,
  MlIcon,
  MlButton,
  MlButtonGroup,
  MlLink,
  MlRadio,
  MlRadioGroup,
  MlDialog,
  MlCard,
];
// 注册组件
components.forEach((component) => {
  Vue.use(component);
});

new Vue({
  el: '#app',
  render: (h) => h(App),
});
```
