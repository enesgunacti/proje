<template>
    <ArticleAdd @add:article="addArticle"/>
    <ArticleList @update:article="updateArticle" @delete:article="deleteArticle" :articles="articles"/>
   
</template>
<script>
import ArticleList from './ArticleList.vue'
import ArticleAdd from './ArticleAdd.vue'
export default {
    
    name:'article',
    components:{
    ArticleList,
    ArticleAdd
    },
    data(){
        return{
            articles:[]
        }
    },
    mounted(){
        this.getArticle()
    },
    methods:{
       async getArticle(){
           const result = await fetch('https://localhost:44374/api/Articles/getall')
           const data = await result.json()
           this.articles = data;

        },
        async deleteArticle(article){
            await fetch('https://localhost:44374/api/Articles/delete',{
                method:'DELETE',
                body:JSON.stringify(article),
                headers:{"Content-Type":"application/json"}
            })

            this.articles =this.articles.filter(
                commentToFilter => commentToFilter.id!==article.id
            )
        },
        async updateArticle(article){
            const result = await fetch('https://localhost:44374/api/Comments/update',{
                method:'POST',
                body:JSON.stringify(article),
                headers:{"Content-Type":"application/json"}
            })
            const updatedArticle = await result.json()
            this.articles = this.articles.map(article=>article.id===updatedArticle.id?updatedArticle:article)
        },
        async addArticle(article){
            const result = await fetch('https://localhost:44374/api/Articles/add',{
                method:'POST',
                body:JSON.stringify(article),
                headers:{"Content-Type":"application/json"}
            })
            const newArticle = await result.json()
            this.articles = [...this.article,newArticle]
        }
    }
}
</script>
<style scoped>

</style>