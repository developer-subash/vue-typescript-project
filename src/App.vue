<template>
<div>
  
  <router-view />
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
@import "../public/css/style.css";
@import "../public/css/responsive.css";
</style>
