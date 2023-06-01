<template>
  <div class="demoBlock">
    <div>
      <ml-radio v-model="radio1" label="1" border>备选项1</ml-radio>
      <ml-radio v-model="radio1" label="2" border>备选项2</ml-radio>
    </div>
    <div style="margin-top: 20px">
      <ml-radio v-model="radio2" label="1" border size="medium">备选项1</ml-radio>
      <ml-radio v-model="radio2" label="2" border size="medium">备选项2</ml-radio>
    </div>
    <div style="margin-top: 20px">
      <ml-radio-group v-model="radio3" size="small">
        <ml-radio label="1" border>备选项1</ml-radio>
        <ml-radio label="2" border disabled>备选项2</ml-radio>
      </ml-radio-group>
    </div>
    <div style="margin-top: 20px">
      <ml-radio-group v-model="radio4" size="mini" disabled>
        <ml-radio label="1" border>备选项1</ml-radio>
        <ml-radio label="2" border>备选项2</ml-radio>
      </ml-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: "1",
      radio2: "1",
      radio3: "1",
      radio4: "1",
    };
  },
};
</script>
