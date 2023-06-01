<template>
  <div class="demoBlock">
    <ml-container>
      <ml-header>Header</ml-header>
      <ml-main>Main</ml-main>
    </ml-container>

    <ml-container>
      <ml-header>Header</ml-header>
      <ml-main>Main</ml-main>
      <ml-footer>Footer</ml-footer>
    </ml-container>

    <ml-container>
      <ml-aside width="200px">Aside</ml-aside>
      <ml-main>Main</ml-main>
    </ml-container>

    <ml-container>
      <ml-header>Header</ml-header>
      <ml-container>
        <ml-aside width="200px">Aside</ml-aside>
        <ml-main>Main</ml-main>
      </ml-container>
    </ml-container>

    <ml-container>
      <ml-header>Header</ml-header>
      <ml-container>
        <ml-aside width="200px">Aside</ml-aside>
        <ml-container>
          <ml-main>Main</ml-main>
          <ml-footer>Footer</ml-footer>
        </ml-container>
      </ml-container>
    </ml-container>

    <ml-container>
      <ml-aside width="200px">Aside</ml-aside>
      <ml-container>
        <ml-header>Header</ml-header>
        <ml-main>Main</ml-main>
      </ml-container>
    </ml-container>

    <ml-container>
      <ml-aside width="200px">Aside</ml-aside>
      <ml-container>
        <ml-header>Header</ml-header>
        <ml-main>Main</ml-main>
        <ml-footer>Footer</ml-footer>
      </ml-container>
    </ml-container>
  </div>
</template>
<style lang="scss" scoped>
.ml-header,
.ml-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.ml-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.ml-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .ml-container {
  margin-bottom: 40px;
}

.ml-container:nth-child(5) .ml-aside,
.ml-container:nth-child(6) .ml-aside {
  line-height: 260px;
}

.ml-container:nth-child(7) .ml-aside {
  line-height: 320px;
}
</style>
