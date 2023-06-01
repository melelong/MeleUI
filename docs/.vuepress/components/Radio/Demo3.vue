<template>
  <div class="demoBlock">
    <ml-radio-group v-model="radio">
      <ml-radio :label="3">备选项</ml-radio>
      <ml-radio :label="6">备选项</ml-radio>
      <ml-radio :label="9">备选项</ml-radio>
    </ml-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: 3,
    };
  },
};
</script>
