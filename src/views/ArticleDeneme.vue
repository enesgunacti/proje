<template>
    <div class="post">
                <h1 class="title">İyi Okumalar...</h1>
                <br>                
                <h1 class="post-title" >{{articles.title}}</h1>
                <br>
                <span class="post-sender">{{articles.seoAuthor}}</span>
                <br>
                <p class="post-text">
                    {{articles.content}}
                </p>
                <br>
                <hr>
                <h3>Yorum Yapmak İsterseniz Aşağıdaki Formu Kullanabilirsiniz..</h3>
                <ArticleCommentAdd @add:comment="addCommentArticle"/>
                <hr>
                <h3>Yorumlar</h3>
                 
                <ArticleComment :comments="comments"/>
            </div>
</template>
<script>
import ArticleComment from './ArticleComment.vue'
import ArticleCommentAdd from './ArticleCommentAdd.vue'
export default {
    
    name:'article-deneme',
    components:{
        ArticleComment,
        ArticleCommentAdd
    },
    data(){
        
        return{
            articles:[],
            comments:[]
        }

    },
    
    mounted(){
         
        this.getArticlesById(this.$route.params.slug)
        this.getComments(this.$route.params.slug)

        
    },
    methods:{       
        async getArticlesById(id){
           const result = await fetch('https://localhost:44374/api/Articles/getbyid?articleId='+id)
           const data = await result.json()
           this.articles = data;
        },
        async addCommentArticle(comment){
            const result = await fetch('https://localhost:44374/api/Comments/add',{
                method:'POST',
                body:JSON.stringify(comment),
                headers:{"Content-Type":"application/json"}
            })
            const newComment = await result.json()
            this.comments = [...this.comments,newComment]
        },
        async getComments(id){
            const result = await fetch('https://localhost:44374/api/Comments/getbyid?articleId='+id)
            const data = await result.json()
            this.comments = data;
        },
    },
    
}
</script>
<style scoped>
.title{
    font-family: 'Lobster';
}
.post{
    margin-bottom: 50px;
}

.post-title{
    font-family: 'Lobster';   
}
.post-sender{
    font-size: 20px;
    color: indigo;
    font-family: Calibri;

}
.post-text{
    font-size: 18px;
    line-height: 26px;
}
</style>