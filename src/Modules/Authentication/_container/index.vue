<template>
  <div>
     {{'hello'}}   
  </div>  
</template>

<script lang="ts">
import { mapGetters } from "vuex";

import { Component, Prop, Vue } from "vue-property-decorator";
import Login from "../_components/Login.vue";
import { userApiService } from "../_services/api";
@Component({
  components: {
    Login
  }
})
export default class Index extends Vue {
  private userobj: any;
  constructor() {
    super();
    this.userobj = userApiService.addUser();
  }
  protected mounted() {}

  protected created() {
    const STORE_KEY = "$_auth";
  }
}
</script>


<style>
</style>
