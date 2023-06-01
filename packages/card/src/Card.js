export default {
  name: "MlCard",
  props: {
    header: { type: String },
    "body-style": {
      type: Object,
      default: () => ({ padding: "20px" }),
    },
    shadow: {
      type: String,
      default: "always",
      validator:
        (val) => ["always", "hover", "never"].includes(val),
    },
  },
  computed: {
    className() {
      const className = [
        'ml-card',
        `is-${this.shadow}-shadow`,
      ];
      return className;
    },
  },
  render(h) {
    const header = this.$slots.header && h('div', {
      class: 'ml-card__header',
    }, this.$slots.header);
    const body = h('div', {
      class: 'ml-card__body',
      on: {
        click: (e) => this.$emit('click', e),
      },
      style: this.bodyStyle,
    }, this.$slots.default);
    const childrenNode = [header, body];
    return h('div', {
      class: this.className,
    }, childrenNode);
  },
};
