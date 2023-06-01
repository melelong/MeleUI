<template>
  <div class="demoBlock">
    <ml-radio disabled v-model="radio" label="禁用">备选项</ml-radio>
    <ml-radio disabled v-model="radio" label="选中且禁用">备选项</ml-radio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "选中且禁用",
    };
  },
};
</script>
