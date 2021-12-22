<template>
<hr>
<ul class="list-group">
    <li  v-for="category in categories" :key="category.id" class="list-group-item" >
        {{category.name}}
    </li>
</ul>
</template>
<script>
export default {
    name:'blog-category',
    props:{
        categories:Array
    },
    
}
</script>
<style scoped>

</style>