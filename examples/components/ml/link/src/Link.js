export default {
  name: 'MlLink',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val) => ["default", "primary", "success", "warning", "danger", "info"].includes(val),
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
    },
    target: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  computed: {
    className() {
      const className = [
        'ml-link',
        `ml-link--${this.type}`,
        {
          'is-disabled': this.disabled,
          'is-underline': this.underline && !this.disabled,
        },
      ];
      return className;
    },
  },
  render(h) {
    const slots = this.$slots.default ? h('span', {}, this.$slots.default) : this.$slots.default;
    const childrenNode = [slots];
    if (this.icon && !this.loading) childrenNode.unshift(h('i', { class: this.icon }));
    return h('a', {
      attrs: {
        href: this.href,
        target: this.target,
      },
      on: {
        click: (e) => {
          if (!this.disabled) {
            this.$emit('click', e);
          }
        },
      },
      class: this.className,
    }, childrenNode);
  },
};
