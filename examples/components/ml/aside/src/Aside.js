export default {
  name: "MlAside",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    width: {
      type: String,
      default: '300px',
    },
  },
  computed: {
    className() {
      const className = ["ml-aside"];
      return className;
    },
    style() {
      const style = {};
      style.width = this.width;
      return style;
    },
  },
  render(h) {
    return h(this.tag, {
      class: this.className,
      style: this.style,
    }, this.$slots.default);
  },
};
