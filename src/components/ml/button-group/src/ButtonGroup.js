export default {
  name: 'MlButtonGroup',
  computed: {
    className() {
      const className = ['ml-button-group'];
      return className;
    },
  },
  render(h) {
    return h('div', {
      class: this.className,
    }, this.$slots.default);
  },
};
