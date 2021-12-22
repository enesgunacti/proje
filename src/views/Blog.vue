<template>
<div class="container">
<div class="row">
    <div class="col-md-3">
        <BlogCategory :categories="categories"/>
    </div>
    <div class="col-md-9">
        <BlogView :articles="articles"/>
    </div>
</div>
</div>
</template>
<script>
import BlogCategory from './BlogCategory.vue'
import BlogView from './BlogView.vue'
export default {
    name:'blog',
    components:{
        BlogCategory,
        BlogView
    },
    data(){
        return{
            categories:[],
            articles:[]
        }
    },
    mounted(){
        this.getCategories()
        this.getArticles()
        
    },
    methods:{
       async getCategories(){
           const result = await fetch('https://localhost:44374/api/Categories/getall')
           const data = await result.json()
           this.categories = data;
        },
        async getArticles(){
            const result = await fetch('https://localhost:44374/api/Articles/getall')
           const data = await result.json()
           this.articles = data;
        }
        
    }
}
</script>
<style scoped>

</style>