export default {
  name: "MlRow",
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: "",
    },
    justify: {
      type: String,
      default: "start",
      validator: (val) => ["start", "end", "center", "space-around", "space-between"].includes(val),
    },
    align: {
      type: String,
      default: "top",
      validator: (val) => ["top", "middle", "bottom"].includes(val),
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
  render(h) {
    return h(this.tag, {
      class: [
        'ml-row',
        { 'ml-row--flex': this.type === 'flex' },
        this.justify !== 'start' && `is-justify-${this.justify}`,
        this.align !== 'top' && `is-align-${this.align}`,
      ],
      style: this.style,
    }, this.$slots.default);
  },
};
