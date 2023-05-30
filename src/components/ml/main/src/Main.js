export default {
  name: 'MlMain',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    className() {
      const className = ['ml-main'];
      return className;
    },
  },
  render(h) {
    return h(this.tag, {
      class: this.className,
      // style: this.style,
    }, this.$slots.default);
  },
};
