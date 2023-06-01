# MeleUI

<p align="center">
  <a target="_blank" href="https://melelong.github.io/MeleUI/" >
    <img width="100" src="https://blog.melelong.com/static/upload/2023-4-30-14-59-24-427-472cf.webp" alt="logo">
  </a>
</p>

<h2 align="center">
  <p>MeleUI</p>
  <p>仿elementUI风格的组件库</p>
</h2>

### 快速开始

---

#### 1.安装组件库

---

```bash
npm i mele-ui
```

> 请确保你的 Node.js 版本 >= 8.9。

#### 2.引入组件库

---

```javascript
//  完整引入
import Vue from 'vue';
import Ml from 'mele-ui';
import 'mele-ui/dist/theme-chalk/index.css';
import App from './App.vue';

Vue.use(Ml);

new Vue({
  el: '#app',
  render: (h) => h(App),
});

//  按需引用
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
