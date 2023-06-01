<template>
  <div class="demoBlock">
    <ml-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <ml-button style="float: right; padding: 3px 0" type="text">操作按钮</ml-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </ml-card>
  </div>
</template>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
