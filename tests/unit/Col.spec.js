import { shallowMount } from '@vue/test-utils';
import Col from '@ml/col';
import Row from '@ml/row';

describe('Col.vue', () => {
  let wrapper;
  let colEle;

  beforeEach(() => {
    wrapper = shallowMount(Col, {
      parentComponent: Row,
    });
    colEle = wrapper.vm.$el;
    wrapper.vm.$parent.gutter = 20;
  });

  it('create', () => {
    expect(colEle.classList).toContain('ml-col');
  });
  it('span', async () => {
    await wrapper.setProps({ span: 12 });
    expect(colEle.classList).toContain('ml-col-12');
  });
  it('push', async () => {
    await wrapper.setProps({ push: 5 });
    expect(colEle.classList).toContain('ml-col-push-5');
  });
  it('pull', async () => {
    await wrapper.setProps({ pull: 4 });
    expect(colEle.classList).toContain('ml-col-pull-4');
  });
  it('res', async () => {
    await wrapper.setProps({ sm: { span: 4, offset: 2 }, md: 8, lg: { span: 6, offset: 3 } });
    expect(colEle.classList).toContain('ml-col-sm-4');
    expect(colEle.classList).toContain('ml-col-sm-offset-2');
    expect(colEle.classList).toContain('ml-col-md-8');
    expect(colEle.classList).toContain('ml-col-lg-6');
    expect(colEle.classList).toContain('ml-col-lg-offset-3');
  });
  it('tag', async () => {
    await wrapper.setProps({ tag: 'span' });
    expect(wrapper.find('span').exists()).toBe(true);
  });
  it('gutter', async () => {
    expect(wrapper.vm.$parent.$options.name).toBe('MlRow');
    expect(colEle.style.paddingLeft).toBe('10px');
    expect(colEle.style.paddingRight).toBe('10px');
  });
});
