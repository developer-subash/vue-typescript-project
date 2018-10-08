<template>
  <div id="app">
   <h2>hello</h2>
   <Dashboard />
  </div>
</template>
<script lang="ts">
import Dashboard from "./Modules/Authentication/_container/index.vue";
export default {
  components: {
    Dashboard
  }
};
</script>


<style lang="scss">
@import "./assets/css/style.css";
// @import "./assets/css/all.css";
// @import "./assets/css/bootstrap-grid.css";
// @import "./assets/css/bootstrap-grid.min.css";
</style>
