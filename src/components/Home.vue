<template>
<div>

  <h2>{{item.title}}</h2>
</div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {

    private item = {
        title: 'string',
    };

    constructor() {
        super();
        this.item.title = 'Hello from the Home Page';
    }

}


</script>