import MlMain from './src/Main';

MlMain.install = (Vue) => {
  Vue.component(MlMain.name, MlMain);
};
export default MlMain;
