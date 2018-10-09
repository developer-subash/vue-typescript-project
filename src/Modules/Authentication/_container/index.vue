<template>
  <div>
     {{'hello'}}   
  </div>  
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import store from "../_services/store/index.js";
import { Component, Prop, Vue } from "vue-property-decorator";
import Login from "../_components/Login.vue";
import { userService } from "../_services/api";
@Component({
  components: {
    Login
  }
})
export default class Index extends Vue {
  constructor() {
    super();
  }

  protected created() {
    const STORE_KEY = "$_auth";
  }
}
</script>


<style>
</style>
