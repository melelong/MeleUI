<template>
  <div class="demoBlock">
    <ml-row :gutter="20">
      <ml-col :span="6"><div class="grid-content bg-purple"></div></ml-col>
      <ml-col :span="6"><div class="grid-content bg-purple"></div></ml-col>
      <ml-col :span="6"><div class="grid-content bg-purple"></div></ml-col>
      <ml-col :span="6"><div class="grid-content bg-purple"></div></ml-col>
    </ml-row>
  </div>
</template>
<style lang="scss" scoped>
.ml-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.ml-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
