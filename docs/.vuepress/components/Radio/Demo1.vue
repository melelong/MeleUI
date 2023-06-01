<template>
  <div class="demoBlock">
    <ml-radio v-model="radio" label="1">备选项</ml-radio>
    <ml-radio v-model="radio" label="2">备选项</ml-radio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
    };
  },
};
</script>
