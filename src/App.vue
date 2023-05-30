<template>
  <div class="app">
    <ml-button type="text" @click="dialogVisible = true">点击打开 Dialog</ml-button>
    <ml-dialog
      title="风险提示"
      :close-on-click-modal="true"
      :visible.sync="dialogVisible"
      :closeOnPressEscape="true"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <ml-button @click="dialogVisible = false">取 消</ml-button>
        <ml-button type="primary" @click="dialogVisible = false">确 定</ml-button>
      </span>
    </ml-dialog>
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
      console.log('打开了');
    },
    close() {
      console.log('关闭了');
    },
  },
};
</script>
