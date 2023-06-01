//  Layout 布局
import MlCol from "./col";
import MlRow from "./row";
//  Container 布局容器
import MlContainer from "./container";
import MlHeader from "./header";
import MlAside from "./aside";
import MlMain from "./main";
import MlFooter from "./footer";
//  Icon 图标
import MlIcon from "./icon";
//  Button 按钮
import MlButton from "./button";
import MlButtonGroup from "./button-group";
//  Link 文字链接
import MlLink from "./link";
//  Radio 单选框
import MlRadio from './radio';
import MlRadioGroup from './radio-group';
//  Dialog 对话框
import MlDialog from "./dialog";
//  Card 卡片
import MlCard from "./card";

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
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
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
  install,
};

export {
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
  install,
};
