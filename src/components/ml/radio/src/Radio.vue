<template>
  <label
    :class="[
      'ml-radio',
      border && Size && `ml-radio-${Size}`,
      {
        'is-checked': label === model,
        'is-border': border,
        'is-disabled': MlRadioGroup.disabled ? MlRadioGroup.disabled : disabled,
      },
    ]"
  >
    <span class="ml-radio__input">
      <span class="ml-radio__inner"></span>
      <input type="radio" class="ml-radio__original" :value="label" :name="name" v-model="model" />
    </span>
    <span class="ml-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MlRadio',
  inject: {
    MlRadioGroup: {
      default: '',
    },
  },
  props: {
    value: [String, Number, Boolean],
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: (val) => ['medium', 'small', 'mini'].includes(val),
    },
    name: {
      type: String,
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.MlRadioGroup.value : this.value;
      },
      set(value) {
        if (this.disabled || this.MlRadioGroup.disabled) return;
        this.isGroup ? this.MlRadioGroup.$emit('input', value) : this.$emit('input', value);
      },
    },
    Size() {
      return this.isGroup ? this.MlRadioGroup.size : this.size;
    },
    isGroup() {
      return !!this.MlRadioGroup;
    },
  },
};
</script>
<style lang="scss" scoped></style>
