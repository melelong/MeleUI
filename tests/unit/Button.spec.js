import { shallowMount } from '@vue/test-utils';
import MlButton from '@ml/button';

describe('MlButton.vue', () => {
  let wrapper;
  let buttonEle;

  beforeEach(() => {
    wrapper = shallowMount(MlButton);
    buttonEle = wrapper.vm.$el;
  });

  it('create', () => {
    expect(buttonEle.classList).toContain('ml-button');
  });
  it('size', async () => {
    await wrapper.setProps({ size: 'mini' });
    expect(buttonEle.classList).toContain('ml-button--mini');
  });
  it('type', async () => {
    await wrapper.setProps({ type: 'info' });
    expect(buttonEle.classList).toContain('ml-button--info');
  });
  it('type:text', async () => {
    await wrapper.setProps({ type: 'text' });
    expect(buttonEle.classList).toContain('ml-button--text');
  });
  it('plain', async () => {
    await wrapper.setProps({ plain: true });
    expect(buttonEle.classList).toContain('is-plain');
  });
  it('round', async () => {
    await wrapper.setProps({ round: true });
    expect(buttonEle.classList).toContain('is-round');
  });
  it('circle', async () => {
    await wrapper.setProps({ circle: true });
    expect(buttonEle.classList).toContain('is-circle');
  });
  it('loading', async () => {
    await wrapper.setProps({ loading: true });
    expect(wrapper.html()).toContain('<i class="ml-icon-loading"></i>');
  });
  it('disabled', async () => {
    await wrapper.setProps({ disabled: true });
    expect(buttonEle.classList).toContain('is-disabled');
  });
  it('icon', async () => {
    await wrapper.setProps({ icon: 'ml-icon-edit' });
    expect(wrapper.html()).toContain('<i class="ml-icon-edit"></i>');
  });
  it('autofocus', async () => {
    await wrapper.setProps({ autofocus: true });
    expect(wrapper.attributes('autofocus')).toBe('autofocus');
  });
  it('native-type', async () => {
    await wrapper.setProps({ nativeType: 'reset' });
    expect(wrapper.attributes('type')).toBe('reset');
  });
  it('click', async () => {
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
