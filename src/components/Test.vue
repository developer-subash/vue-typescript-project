<template>
    <div>
        {{item.title}}
    </div>
</template>
<script lang="ts">
import { Component,Vue} from 'vue-property-decorator';
@Component 
export default class Test extends Vue{

private item = {
    title:'string',
}
constructor()
{
    super();
    this.item.title = "Hello from About Page";
}

}


</script>

