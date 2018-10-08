<template>
  <div>
     <login  />   
  </div>  
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import store from "../_services/store";
import { Component, Prop, Vue } from "vue-property-decorator";
import Login from "../_components/Login.vue";
import { userService } from "../_services/api";
@Component({
  components: {
    Login
  }
})
export default class Index extends Vue {
  // private userservice: any;
  constructor() {
    super();
  }

  created() {}
}
</script>


<style>
</style>
