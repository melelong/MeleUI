export default {
  name: 'MlButton',
  props: {
    size: {
      type: String,
      validator: (val) => ['medium', 'small', 'mini'].includes(val),
    },
    type: {
      type: String,
      validator: (val) => ['primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val),
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    'native-type': {
      type: String,
      default: 'button',
      validator: (val) => ['button', 'submit', 'reset'].includes(val),
    },
  },
  computed: {
    style() {
      const style = {};
      return style;
    },
  },
  methods: {
    handlerClick(e) {
      this.$emit('click', e);
    },
  },
  render(h) {
    const slots = this.$slots.default ? h('span', {}, this.$slots.default) : this.$slots.default;
    const childrenNode = [slots];
    if (this.icon && !this.loading) childrenNode.unshift(h('i', { class: this.icon }));
    if (this.loading) childrenNode.unshift(h('i', { class: 'ml-icon-loading' }));
    return h('button', {
      attrs: {
        autofocus: this.autofocus,
        type: (this.nativeType && this.nativeType !== 'button') && this.nativeType,
      },
      on: {
        click: this.handlerClick,
      },
      class: [
        'ml-button',
        [
          this.type && `ml-button--${this.type}`,
          this.size && `ml-button--${this.size}`,
        ],
        {
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle,
          'is-loading': this.loading,
          'is-disabled': this.disabled,
        },
      ],
      style: this.style,
    }, childrenNode);
  },
};
