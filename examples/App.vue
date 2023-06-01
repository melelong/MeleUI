<template>
  <div class="app">
    <ml-link :underline="false">无下划线</ml-link>
    <ml-link>有下划线</ml-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    open() {
      console.log("打开了");
    },
    close() {
      console.log("关闭了");
    },
  },
};
</script>
