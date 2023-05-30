//  Layout 布局
import MlCol from "@ml/col";
import MlRow from "@ml/row";
//  Container 布局容器
import MlContainer from "@ml/container";
import MlHeader from "@ml/header";
import MlAside from "@ml/aside";
import MlMain from "@ml/main";
import MlFooter from "@ml/footer";
//  Icon 图标
import MlIcon from "@ml/icon";
//  Button 按钮
import MlButton from "@ml/button";
import MlButtonGroup from "@ml/button-group";
//  Link 文字链接
import MlLink from "@ml/link";
//  Radio 单选框
import MlRadio from '@ml/radio';
import MlRadioGroup from '@ml/radio-group';
//  Dialog 对话框
import MlDialog from "@ml/dialog";
//  Card 卡片
import MlCard from "@ml/card";

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
