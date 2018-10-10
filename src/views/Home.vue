<template>
  <div class="home">
    
  
     <div id="nav">
      <router-link :to="{name: 'admin'}">Admin Login</router-link> |
      <router-link  :to="{name: 'admin-register'}">Register</router-link>
      
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
