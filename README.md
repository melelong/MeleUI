# MeleUI(学习编写组件)

# MeleUI(组件库)

### 快速开始

#### 1.安装组件库

```bash
npm i mele-ui
```

#### 2.引入组件库

```javascript
//  全部引入
import 'mele-ui/dist/theme-chalk/index.css';
import Ml from 'mele-ui';
Vue.use(Ml);

//  按需引用
import 'mele-ui/dist/theme-chalk/card.css';
import { MlCard } from 'mele-ui';
Vue.use(MlCard);
```
