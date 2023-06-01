<template>
  <transition
    name="dialog-fade"
    @enter="$emit('open')"
    @after-enter="$emit('opened')"
    @leave="$emit('close')"
    @after-leave="$emit('closed')"
  >
    <div
      ref="wrapper"
      class="ml-dialog__wrapper"
      :style="{
        'z-index': '2001',
      }"
      v-show="visible"
      @click.self="handleClose('modal')"
      @keydown.esc="handleClose('esc')"
    >
      <div
        class="ml-dialog"
        :style="{
          marginTop: top,
          width,
        }"
      >
        <div class="ml-dialog__header">
          <span class="ml-dialog__title" v-if="$slots.title || title">
            <slot name="title"> {{ title }}</slot>
          </span>
          <button v-if="showClose" class="ml-dialog__headerbtn" @click="handleClose">
            <i class="ml-dialog__close ml-icon ml-icon-close"></i>
          </button>
        </div>
        <div class="ml-dialog__body" v-if="$slots.default">
          <slot></slot>
        </div>
        <div class="ml-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "MlDialog",
  watch: {
    visible() {
      !this.visible && this.destroyOnClose && this.$refs.wrapper.remove();
    },
  },
  props: {
    title: {
      type: String,
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    document.addEventListener("keyup", this.onKeyUp);
  },
  beforeDestroy() {
    document.removeEventListener("keyup", this.onKeyUp);
  },
  methods: {
    handleClose(type) {
      if (type === "modal" && !this.closeOnClickModal) return;
      if (type === "esc" && !this.closeOnPressEscape) return;
      this.$emit("update:visible", false);
    },
    onKeyUp(e) {
      if (e.keyCode === 27 && this.closeOnPressEscape) this.handleClose("esc");
    },
  },
};
</script>
