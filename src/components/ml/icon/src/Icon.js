export default {
  name: 'MlIcon',
  props: {
    name: {
      type: String,
    },
  },
  computed: {
    className() {
      const className = ['ml-icon', `ml-icon-${this.name}`];
      return className;
    },
    // style() {
    //   const style = {};
    //   style.height = this.height;
    //   return style;
    // },
  },
  render(h) {
    return h('i', {
      class: this.className,
      style: this.style,
    }, this.$slots.default);
  },
};
