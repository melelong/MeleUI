export default {
  name: 'MlFooter',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    height: {
      type: String,
      default: '60px',
    },
  },
  computed: {
    className() {
      const className = ['ml-footer'];
      return className;
    },
    // style() {
    //   const style = {};
    //   style.height = this.height;
    //   return style;
    // },
  },
  render(h) {
    return h(this.tag, {
      class: this.className,
      // style: this.style,
      style: {
        height: this.height,
      },
    }, this.$slots.default);
  },
};
