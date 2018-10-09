<template>  
   <div>
     <h2>{{title}}</h2>
   </div> 
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { authService } from "../_container/AuthenticationService";

@Component({})
export default class Login extends Vue {

  private title: string = "hello subash";

  constructor() {
    super();
    // console.log(authService.addUser());
  }
}
</script>

