<template>
  <div> 
   <Dashboard/>
  </div>
</template>
<script lang="ts">

import Dashboard from './Modules/Authentication/_container/index.vue';
export default {
  components: {
    Dashboard,
  }
};

</script>


<style lang="scss">
@import "./assets/css/style.css";
</style>
