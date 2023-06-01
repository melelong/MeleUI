<template>
  <div class="demoBlock">
    <ml-button type="text" @click="dialogVisible = true">点击打开 Dialog</ml-button>

    <ml-dialog title="提示" :visible.sync="dialogVisible" width="30%" @close="handleClose">
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
      window.alert("已关闭");
    },
  },
};
</script>
