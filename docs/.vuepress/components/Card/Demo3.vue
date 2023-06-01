<template>
  <div class="demoBlock">
    <ml-row>
      <ml-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <ml-card :body-style="{ padding: '0px' }" width="">
          <img
            src="https://blog.melelong.com/static/upload/2023-4-30-14-59-24-427-472cf.webp"
            class="image"
          />
          <div style="padding: 14px">
            <span>帅哥的头像</span>
            <div class="bottom clearfix">
              <ml-button type="text" class="button">点赞</ml-button>
            </div>
          </div>
        </ml-card>
      </ml-col>
    </ml-row>
  </div>
</template>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
