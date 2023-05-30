export default {
  name: "MlContainer",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    direction: {
      type: String,
      validator: (val) => ['vertical', 'horizontal'].includes(val),
    },
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') return true;
      if (this.direction === 'horizontal') return true;
      return this.$slots && this.$slots.default
        ? this.$slots.default.some((vNode) => {
          const tag = vNode.componentOptions && vNode.componentOptions.tag;
          return tag === 'ml-header' || tag === 'ml-footer';
        })
        : false;
    },
    className() {
      const className = ["ml-container"];
      return className;
    },
  },
  render(h) {
    return h(this.tag, {
      class: [this.className, { 'is-vertical': this.isVertical }],
      // style: this.style,
    }, this.$slots.default);
  },
};
