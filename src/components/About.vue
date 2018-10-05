<template>
<div>
    <h2>
       hello subash
    </h2>
</div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class About extends Vue{

     item = {
        title:'string',
    }

    constructor()
    {
        super();
        this.item.title = "Hello from the About Component";
    }

}


</script>