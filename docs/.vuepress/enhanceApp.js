import Ml from '../../packages/index';
import '../../examples/assets/theme-chalk/index.scss';
import './styles/index.scss';

export default async ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Ml);
};