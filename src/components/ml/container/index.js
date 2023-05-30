import MlContainer from './src/Container';

MlContainer.install = (Vue) => {
  Vue.component(MlContainer.name, MlContainer);
};
export default MlContainer;
