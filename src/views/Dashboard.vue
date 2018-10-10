<template>
    <div>
      <TheNavbar />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TheNavbar from "../src/components/TheNavbar.vue";
@Component({
  components: {
    TheNavbar
  }
})
export default class Dashbaord extends Vue {}
</script>

