<template>
    <div>
        <h2>hello from Hllo Compoennt</h2>
        <router-link :to="{name: 'test-welcome'}">Test</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
</script>

