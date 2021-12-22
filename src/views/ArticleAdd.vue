<template>
    <div id="addForm">
        <form @submit.prevent="handleAdd">
            
            <div class="form-group">
                <label for="title">Başlık</label>
                <input v-model="article.title" type="text" class="form-control" id="title">
            </div>
            <div class="form-group">  
                <label for="exampleFormControlTextarea1" class="form-label">İçerik</label>
                <textarea v-model="article.content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>              
                <!-- <label for="content">İçerik</label>
                <input v-model="article.content" type="text" class="form-control" id="content"> -->
            </div>             
            <div class="form-group">
                <label for="viewsCount">Görüntülenme Sayısı</label>
                <input v-model="article.viewsCount" type="text" class="form-control" id="viewsCount">
            </div>
             <div class="form-group">
                <label for="commentCount">Yorum Sayısı</label>
                <input v-model="article.commentCount" type="text" class="form-control" id="commentCount">
            </div>
            <div class="form-group">
                <label for="seoAuthor">Seo Author</label>
                <input v-model="article.seoAuthor" type="text" class="form-control" id="seoAuthor">
            </div>
            <div class="form-group">
                <label for="seoDescription">Seo Description</label>
                <input v-model="article.seoDescription" type="text" class="form-control" id="seoDescription">
            </div>
            <div class="form-group">
                <label for="seoTags">Seo Tags</label>
                <input v-model="article.seoTags" type="text" class="form-control" id="seoTags">
            </div>
            <div class="form-group">
                <label for="categoryId">Kategori Numarsı</label>
                <input v-model="article.categoryId" type="text" class="form-control" id="categoryId">
            </div>
            <div class="form-group">
                <label for="userId">Kullanıcı ID</label>
                <input v-model="article.userId" type="text" class="form-control" id="userId">
            </div>
            <hr>
            <button type="submit" @click="refresh" class="btn btn-sm btn-success">Ekle</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'article-add',
    data(){
        return{
            article:{title:'',content:'',viewsCount:'',commentCount:'',seoAuthor:'',seoDescription:'',seoTags:'',categoryId:'',userId:''}
        }
    },
    methods:{
        handleAdd(){
            this.$emit("add:article",this.article)
        },
        refresh(){
            window.location.reload();
        },
        
    }
}   
</script>
<style scoped>
#addForm{
    margin: 100px;
    
}
</style>