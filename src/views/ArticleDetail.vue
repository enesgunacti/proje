<template>
    <div>
        <div class="container">
    <div class="row">
    <div class="col-md-3">
        <BlogCategory :categories="categories"/>
    </div>
    <div class="col-md-9">
        <hr>
        <ArticleDeneme :articles="articles"/>
    </div>
    </div>
    </div>
        
    </div>
</template>
<script>
import BlogCategory from './BlogCategory.vue'
import ArticleDeneme from './ArticleDeneme.vue'
export default {
    name:'post-detail',
    components:{
        BlogCategory,
        ArticleDeneme
    },
    
    data(){
        return{
            categories:[],
            articles:[],
                      
        }
    },
    mounted(){
        this.getCategories()
       
    },
    methods:{
        
        async getCategories(){
           const result = await fetch('https://localhost:44374/api/Categories/getall')
           const data = await result.json()
           this.categories = data;
        },       
    }
}
</script>
<style scoped>
.title{
    font-family: 'Lobster';
}
.post{
    margin-bottom: 50px;
}
.block{
    max-width: 600px;
    margin: 0 auto;
}
.post-title{
    font-family: 'Lobster';   
}
.post-sender{
    font-size: 20px;
    color: #333;
    font-family: Calibri;

}
.post-text{
    font-size: 18px;
    line-height: 26px;
}
</style>