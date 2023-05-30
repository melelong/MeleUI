<template>
  <div class="ml-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MlRadioGroup',
  props: {
    value: [String, Number, Boolean],
    size: {
      type: String,
      validator: (val) => ['medium', 'small', 'mini'].includes(val),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {},
  provide() {
    return {
      MlRadioGroup: this,
    };
  },
};
</script>
