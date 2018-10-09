<template>
  <div class="home">
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
     <div id="nav">
      <router-link :to="{name: 'test-welcome'}">Home</router-link> |
      <router-link  :to="{name: 'test-login'}">About</router-link>
      <router-view></router-view>
    </div>
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
