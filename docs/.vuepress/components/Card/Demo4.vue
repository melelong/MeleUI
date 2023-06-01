<template>
  <div class="demoBlock">
    <ml-row :gutter="12">
      <ml-col :span="8">
        <ml-card shadow="always"> 总是显示 </ml-card>
      </ml-col>
      <ml-col :span="8">
        <ml-card shadow="hover"> 鼠标悬浮时显示 </ml-card>
      </ml-col>
      <ml-col :span="8">
        <ml-card shadow="never"> 从不显示 </ml-card>
      </ml-col>
    </ml-row>
  </div>
</template>
