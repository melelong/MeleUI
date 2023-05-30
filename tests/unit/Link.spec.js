import { shallowMount } from '@vue/test-utils';
import MlLink from '@ml/link';

describe('MlLink.vue', () => {
  let wrapper;
  let buttonEle;

  beforeEach(() => {
    wrapper = shallowMount(MlLink);
    buttonEle = wrapper.vm.$el;
  });

  it('create', () => {
    expect(buttonEle.classList).toContain('ml-link');
  });
  it('type', async () => {
    await wrapper.setProps({ type: 'info' });
    expect(buttonEle.classList).toContain('ml-link--info');
  });
  it('underline', async () => {
    await wrapper.setProps({ underline: false });
    expect(buttonEle.classList).not.toContain('is-underline');
  });
  it('disabled', async () => {
    await wrapper.setProps({ disabled: true });
    expect(buttonEle.classList).toContain('is-disabled');
  });
  it('href', async () => {
    await wrapper.setProps({ href: 'https://www.baidu.com/' });
    expect(wrapper.attributes('href')).toEqual('https://www.baidu.com/');
  });
  it('icon', async () => {
    await wrapper.setProps({ icon: 'ml-icon-edit' });
    expect(wrapper.html()).toContain('<i class="ml-icon-edit"></i>');
  });
  it('click', async () => {
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
  it('click href', async () => {
    await wrapper.setProps({
      href: 'https://www.baidu.com/',
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).not.toBeFalsy();
  });

  it('click disabled', async () => {
    await wrapper.setProps({
      disabled: true,
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });
});
