---
title: 主题样式
---

# 主题样式

### 在项目中改变 SCSS 变量

---

可以在 `node_modules/mele-ui/examples/assets/theme-chalk/common/var.scss`中修改定义好的默认样式变量

::: details 查看代码

```scss
/**
  Color
*/

// 主色调
$--color-primary: #409eff !default;
$--color-white: #ffffff !default;
$--color-black: #000000 !default;
$--color-transparent: transparent !default;
$--color-primary-dark-1: mix($--color-black, $--color-primary, 10%) !default;
$--color-primary-dark-2: mix($--color-black, $--color-primary, 20%) !default;
$--color-primary-dark-3: mix($--color-black, $--color-primary, 30%) !default;
$--color-primary-dark-4: mix($--color-black, $--color-primary, 40%) !default;
$--color-primary-dark-5: mix($--color-black, $--color-primary, 50%) !default;
$--color-primary-dark-6: mix($--color-black, $--color-primary, 60%) !default;
$--color-primary-dark-7: mix($--color-black, $--color-primary, 70%) !default;
$--color-primary-dark-8: mix($--color-black, $--color-primary, 80%) !default;
$--color-primary-dark-9: mix($--color-black, $--color-primary, 90%) !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default;
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default;
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default;
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default;
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default;
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default;
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default;
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default;
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default;
// 辅助色
$--color-success: #67c23a !default; // 成功颜色
$--color-success-dark: mix($--color-black, $--color-success, 80%) !default;
$--color-success-darker: mix($--color-black, $--color-success, 90%) !default;
$--color-success-light: mix($--color-white, $--color-success, 80%) !default;
$--color-success-lighter: mix($--color-white, $--color-success, 90%) !default;
$--color-warning: #e6a23c !default; // 警告颜色
$--color-warning-dark: mix($--color-black, $--color-warning, 80%) !default;
$--color-warning-darker: mix($--color-black, $--color-warning, 90%) !default;
$--color-warning-light: mix($--color-white, $--color-warning, 80%) !default;
$--color-warning-lighter: mix($--color-white, $--color-warning, 90%) !default;
$--color-danger: #f56c6c !default; // 危险颜色
$--color-danger-dark: mix($--color-black, $--color-danger, 80%) !default;
$--color-danger-darker: mix($--color-black, $--color-danger, 90%) !default;
$--color-danger-light: mix($--color-white, $--color-danger, 80%) !default;
$--color-danger-lighter: mix($--color-white, $--color-danger, 90%) !default;
$--color-info: #909399 !default; //  信息颜色
$--color-info-dark: mix($--color-black, $--color-info, 80%) !default;
$--color-info-darker: mix($--color-black, $--color-info, 90%) !default;
$--color-info-light: mix($--color-white, $--color-info, 80%) !default;
$--color-info-lighter: mix($--color-white, $--color-info, 90%) !default;
// 中性色
$--color-text-primary: #303133 !default; //  主要文字
$--color-text-regular: #606266 !default; //  常规文字
$--color-text-secondary: #909399 !default; //  次要文字
$--color-text-placeholder: #c0c4cc !default; //  占位文字
$--border-color-base: #dcdfe6 !default; //  一级边框
$--border-color-2: #e4e7ed !default; //  二级边框
$--border-color-3: #ebeef5 !default; //  三级边框
$--border-color-4: #f2f6fc !default; //  四级边框

/**
  Typography
*/

$--font-path: 'fonts' !default; //  字体路径
$--font-size-extra-large: 20px !default; // 主标题
$--font-size-large: 18px !default; // 标题
$--font-size-medium: 16px !default; // 小标题
$--font-size-base: 14px !default; // 正文
$--font-size-small: 13px !default; // 正文（小）
$--font-size-extra-small: 12px !default; // 辅助文字
$--font-weight-primary: 500 !default; //  字体加粗
$--line-height-none: 1 !default; //  无行高
$--line-height-compact: 1.3 !default; //  紧凑
$--line-height-conventional: 1.5 !default; //  常规
$--line-height-loose: 1.7 !default; //  宽松

/**
  Border
*/

$--border-width-base: 1px !default; //    基础边框粗细
$--border-style-base: solid !default; //    基础边框样式
$--border-base: $--border-width-base $--border-style-base $--border-color-base !default; //  基础边框#DCDFE6
$--border-radius-base: 4px !default; //  大圆角
$--border-radius-small: 2px !default; //  小圆角
$--border-radius-zero: 0 !default; //  无圆角
$--box-shadow-base: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04) !default; //  基础投影
$--box-shadow-light: 0 2px 12px 0 rgba(0, 0, 0, 0.1) !default; //  浅色投影

/**
  Button
*/

//  common
$--button-padding-vertical: 12px !default;
$--button-padding-horizontal: 20px !default;
$--button-font-size: $--font-size-base !default;
$--button-font-weight: $--font-weight-primary !default;
$--button-border-radius: $--border-radius-base !default;
//  default
$--button-default-background-color: $--color-white !default; //  #ffffff
$--button-default-border-color: $--border-color-base !default; //  #DCDFE6
$--button-default-font-color: $--color-text-regular !default; //  #606266
//  primary
$--button-primary-background-color: $--color-primary !default; // #409EFF
$--button-primary-border-color: $--color-primary !default; //  #409EFF
$--button-primary-font-color: $--color-white !default; //  #ffffff
//  success
$--button-success-background-color: $--color-success !default; //  #67C23A
$--button-success-border-color: $--color-success !default; //  #67C23A
$--button-success-font-color: $--color-white !default; //  #ffffff
//  warning
$--button-warning-background-color: $--color-warning !default; //  #E6A23C
$--button-warning-border-color: $--color-warning !default; //  #E6A23C
$--button-warning-font-color: $--color-white !default; //  #ffffff
//  danger
$--button-danger-background-color: $--color-danger !default; //  #F56C6C
$--button-danger-border-color: $--color-danger !default; //  #F56C6C
$--button-danger-font-color: $--color-white !default; //  #ffffff
//  info
$--button-info-background-color: $--color-info !default; //  #909399
$--button-info-border-color: $--color-info !default; //  #909399
$--button-info-font-color: $--color-white !default; //  #ffffff
//  mix(color1,color2,$--button-active-shade-percent)
$--button-active-shade-percent: 10% !default;
//  round
$--button-round-border-radius: 20px !default;
$--button-round-padding-vertical: 12px !default;
$--button-round-padding-horizontal: 23px !default;
//  circle
$--button-circle-border-radius: 50% !default;
//  disabled
$--button-disabled-background-color: $--color-white !default; //  #ffffff
$--button-disabled-border-color: $--border-color-3 !default; //  #EBEEF5
$--button-disabled-color: $--color-text-placeholder !default; //  #C0C4CC
//  medium
$--button-medium-border-radius: $--border-radius-base !default; //  4px
$--button-medium-padding-vertical: 10px !default;
$--button-medium-padding-horizontal: 20px !default;
$--button-medium-font-size: $--font-size-base !default; //  14px
//  small
$--button-small-border-radius: $--border-radius-base - 1 !default;
$--button-small-padding-vertical: 9px !default;
$--button-small-padding-horizontal: 15px !default;
$--button-small-font-size: $--font-size-extra-small !default; //  12px
//  mini
$--button-mini-border-radius: $--border-radius-base - 1 !default;
$--button-mini-padding-vertical: 7px !default;
$--button-mini-padding-horizontal: 15px !default;
$--button-mini-font-size: $--font-size-extra-small !default; //  12px

/**
  Link
*/

//  default
$--link-font-size: $--font-size-base !default; //  14px
$--link-font-weight: $--font-weight-primary !default; //  500
$--link-default-font-color: $--color-text-regular !default; //  #606266
$--link-active-font-color: $--color-primary !default; //  #409EFF
//  primary
$--link-primary-font-color: $--color-primary !default; //  #409EFF
//  success
$--link-success-font-color: $--color-success !default; //  #67C23A
//  warning
$--link-warning-font-color: $--color-warning !default; //  #E6A23C
//  danger
$--link-danger-font-color: $--color-danger !default; //  #F56C6C
//  info
$--link-info-font-color: $--color-info !default; //  #909399

/**
  Card
*/

//  default
$--card-default-border-radius: $--border-radius-base !default; //  4px
$--card-default-border: $--border-width-base $--border-style-base
  $--border-color-3 !default; //  #EBEEF5
$--card-default-background-color: $--color-white !default; //  #ffffff
$--card-default-font-color: $--color-text-primary !default; //  #303133
$--card-default-header-padding-vertical: 18px !default;
$--card-default-header-padding-horizontal: 20px !default;
$--card-default-header-border: $--border-width-base $--border-style-base
  $--border-color-3 !default; //  #EBEEF5
$--card-default-body-padding: $--font-size-extra-large !default; // 20px
$--card-default-shadow: 0 $--border-radius-small $--font-size-extra-small 0 rgba($--color-black, 0.1);

/**
  Radio
*/

//  default
$--radio-default-font-size: $--font-size-base !default; //  14px
$--radio-default-font-color: $--color-text-regular !default; //  #606266
$--radio-default-font-weight: $--font-weight-primary !default; //  500
$--radio-default-line-height: $--line-height-none !default; //  1
$--radio-default-margin-right: 30px !default; //  间距
$--radio-default-inner-border: $--border-base !default; //  #DCDFE6
$--radio-default-inner-border-radius: 100% !default; //  100%
$--radio-default-inner-width: $--font-size-base !default; //  14px
$--radio-default-inner-height: $--font-size-base !default; //  14px
$--radio-default-inner-background-color: $--color-white !default; // #ffffff
$--radio-default-label-padding-left: $--button-medium-padding-vertical !default; //  10px
//  checked
$--radio-default-color-style: $--color-primary; //  #409EFF
$--radio-checked-inner-border-color: $--radio-default-color-style !default; //  #409EFF
$--radio-checked-inner-background-color: $--radio-default-color-style !default; //  #409EFF
$--radio-checked-label-font-color: $--radio-default-color-style !default; //  #409EFF
$--radio-checked-inner-after-background-color: $--color-white !default; // #ffffff
$--radio-checked-inner-after-width: $--border-radius-base !default; // 4px
$--radio-checked-inner-after-height: $--border-radius-base !default; // 4px
//  disabled
$--radio-disabled-inner-border-color: $--border-color-2 !default; //  #E4E7ED
$--radio-disabled-inner-background-color: #f5f7fa !default; //  #F5F7FA
$--radio-disabled-label-font-color: $--color-text-placeholder !default; //  #C0C4CC
$--radio-disabled-inner-after-background-color: $--color-text-placeholder !default; // #C0C4CC
$--radio-disabled-inner-after-width: $--border-radius-base !default; // 4px
$--radio-disabled-inner-after-height: $--border-radius-base !default; // 4px
//  border
$--radio-border-padding: 12px 20px 0 10px !default; //  12px 20px 0 10px
$--radio-border-border-radius: $--border-radius-base !default; //  4px
$--radio-border-border: $--border-base !default; //  #DCDFE6
$--radio-border-height: 40px !default; //  40px
$--radio-border-checked-border-color: $--radio-default-color-style !default; //  #409EFF
$--radio-border-disabled-border-color: $--border-color-3 !default; //  #EBEEF5
//  size
//  medium
$--radio-size-medium-padding: 10px 20px 0 10px !default; //  10px 20px 0 10px
$--radio-size-medium-border-radius: $--border-radius-base !default; //  4px
$--radio-size-medium-height: 36px !default; //  36px
$--radio-size-medium-font-size: $--font-size-base; //  14px
//  small
$--radio-size-small-padding: 8px 15px 0 10px !default; //  8px 15px 0 10px
$--radio-size-small-border-radius: $--border-radius-base - 1 !default; //  3px
$--radio-size-small-height: 32px !default; //  32px
$--radio-size-small-font-size: $--font-size-extra-small; //  12px
//  mini
$--radio-size-mini-padding: 6px 15px 0 10px !default; //  6px 15px 0 10px
$--radio-size-mini-border-radius: $--border-radius-base - 1 !default; //  3px
$--radio-size-mini-height: 28px !default; //  28px
$--radio-size-mini-font-size: $--font-size-extra-small; //  12px

/**
  Dialog
*/

//  fade
$--dialog-fade-animation-timer: 0.3s !default; //  .3s
//  wrapper
$--dialog-wrapper-background-color: rgba($--color-black, 0.5) !default;
//  dialog
$--dialog-margin: 0 auto 50px !default;
$--dialog-background-color: $--color-white !default; //  #ffffff
$--dialog-border-radius: $--border-radius-small !default; //  2px
$--dialog-width: 50% !default; //  50%
$--dialog-box-shadow: 0 1px 3px rgba($--color-black, 0.3) !default;
//  header
$--dialog-header-padding: $--font-size-extra-large $--font-size-extra-large 10px !default; //  20px 20px 10px
//  title
$--dialog-title-line-height: 24px; //  24px
$--dialog-title-font-size: $--font-size-large; //  18px
$--dialog-title-color: $--color-text-primary !default; //  #303133
//  headerbtn
$--dialog-headerbtn-top: $--font-size-extra-large !default; //  20px
$--dialog-headerbtn-right: $--font-size-extra-large !default; //  20px
$--dialog-headerbtn-font-size: $--font-size-medium !default; //  16px
//  close
$--dialog-close-color: $--color-info !default; //  #909399
//  body
$--dialog-body-padding: 30px $--font-size-extra-large !default; //  30px 20px
$--dialog-body-color: $--color-text-regular !default; //  #606266
$--dialog-body-font-size: $--font-size-base !default; //  14px
//  footer
$--dialog-footer-padding: 30px $--font-size-extra-large $--font-size-extra-large; //  10px 20px 20px
$--dialog-footer-text-align: right !default;

/**
  Container
*/

$--header-padding: 0 20px !default;
$--footer-padding: 0 20px !default;
$--main-padding: 0 20px !default;
$--aside-padding: 0 20px !default;

/**
  Layout
*/

$--sm: 768px !default;
$--md: 992px !default;
$--lg: 1200px !default;
$--xl: 1920px !default;

$--breakpoints: (
  'xs': (
    max-width: $--sm - 1,
  ),
  'sm': (
    min-width: $--sm,
  ),
  'md': (
    min-width: $--md,
  ),
  'lg': (
    min-width: $--lg,
  ),
  'xl': (
    min-width: $--xl,
  ),
);
$--breakpoints-spec: (
  'xs-only': (
    max-width: $--sm - 1,
  ),
  'sm-and-up': (
    min-width: $--sm,
  ),
  'sm-only': (
    min-width: $--sm,
  )
  #{and}
  (
    max-width: (
      $--md - 1,
    ),
  ),
  'sm-and-down': (
    max-width: $--md - 1,
  ),
  'md-and-up': (
    min-width: $--md,
  ),
  'md-only': (
    min-width: $--md,
  )
  #{and}
  (
    max-width: (
      $--lg - 1,
    ),
  ),
  'md-and-down': (
    max-width: $--lg - 1,
  ),
  'lg-and-up': (
    min-width: $--lg,
  ),
  'lg-only': (
    (
        min-width: $--lg,
      )
      #{and}
      (
        max-width: (
          $--xl - 1,
        ),
      ),
  ),
  'lg-and-down': (
    max-width: $--xl - 1,
  ),
  'xl-only': (
    min-width: $--xl,
  ),
);
```

:::

之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入编译好的 CSS 文件）：

```js
import Vue from 'vue';
import Ml from 'mele-ui';
import 'mele-ui/examples/assets/theme-chalk/index.scss';

Vue.use(Ml);
```

::: warning 注意
覆盖字体路径变量不建议修改，这是 Icon 图标的路径。如要修改，将其赋值为 Icon 图标所在的相对路径。
:::
