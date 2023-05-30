export default {
  name: 'MlCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    tag: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'MlRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    className() {
      const className = ['ml-col'];
      ['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop]) {
          className.push(prop === 'span' ? `ml-col-${this[prop]}` : `ml-col-${prop}-${this[prop]}`);
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          className.push(`ml-col-${size}-${this[size]}`);
        }
        if (typeof this[size] === 'object') {
          const props = this[size];
          Object.keys(props).forEach((prop) => {
            if (props[prop]) {
              className.push(
                prop === 'span'
                  ? `ml-col-${size}-${props[prop]}`
                  : `ml-col-${size}-${prop}-${props[prop]}`,
              );
            }
          });
        }
      });
      return className;
    },
  },
  render(h) {
    return h(this.tag, {
      class: this.className,
      style: this.style,
    }, this.$slots.default);
  },
};
