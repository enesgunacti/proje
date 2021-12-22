<template>
<hr>
        <div class="block">
            <h3 class="title">Blog Sitesine Hoş Geldiniz</h3>
        </div>
        <br>
        <div class="posts">
            <div class="post" v-for="article in articles" :key="article.id" >
                <h1 class="post-title" @click="article_detail(article.id)">{{article.title.length > 25 ? article.title.slice(0,25)+'...' :article.title }}</h1>
                <span class="post-sender">{{article.seoAuthor}}</span>
                <p class="post-text">
                    {{article.content.length > 250 ? article.content.slice(0,250)+'...' : article.content}}
                </p>
            </div>
        </div>
</template>
<script>
export default {
    name:'blog-view',
    props:{
        articles:Array
    },
    methods:{
        article_detail(id){ 
            this.$router.push('/article/' + id)
        }
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
    cursor: pointer;
    color: purple;
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