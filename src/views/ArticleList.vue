<template>
    <div id="list">
    <p v-if="articles.length==0">Hiç Makale Yok</p>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Başlık</th>
                <th>İçerik</th>               
                <th>Görüntülenme</th>
                <th>Yorum</th>
                <th>Seo Author</th>
                <th>Seo Description</th>
                <th>Seo Tags</th>
                <th>Kategori Numarası</th>
                <th>Kullanıcı ID</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="article in articles" :key="article.id">
                <td v-if="updateId===article.id">
                    <input v-model="article.id" type="text" class="form-control" id="id">   
                </td>
                <td v-else>
                    {{article.id}}
                </td>
                <td v-if="updateId===article.id">
                    <input v-model="article.title" type="text" class="form-control" id="title">   
                </td>
                <td v-else>
                    {{article.title}}
                </td>
                <td v-if="updateId===article.id">
                    <input v-model="article.content" type="text" class="form-control" id="content">   
                </td>
                <td v-else>
                    {{article.content}}
                </td>
                <td v-if="updateId===article.id">
                    <input v-model="article.thumbnail" type="text" class="form-control" id="thumbnail">   
                </td>                               
                <td v-else>
                    {{article.viewsCount}}
                </td>
                <td v-if="updateId===article.id">
                    <input v-model="article.commentCount" type="text" class="form-control" id="commentCount">   
                </td>
                <td v-else>
                    {{article.commentCount}}
                </td>
                <td v-if="updateId===article.id">
                    <input v-model="article.seoAuthor" type="text" class="form-control" id="seoAuthor">   
                </td>
                <td v-else>
                    {{article.seoAuthor}}
                </td>
                <td v-if="updateId===article.id">
                    <input v-model="article.seoDescription" type="text" class="form-control" id="seoDescription">   
                </td>
                <td v-else>
                    {{article.seoDescription}}
                </td>
                <td v-if="updateId===article.id">
                    <input v-model="article.seoTags" type="text" class="form-control" id="seoTags">   
                </td>
                <td v-else>
                    {{article.seoTags}}
                </td>
                <td v-if="updateId===article.id">
                    <input v-model="article.categoryId" type="text" class="form-control" id="categoryId">   
                </td>
                <td v-else>
                    {{article.categoryId}}
                </td>
                 <td v-if="updateId===article.id">
                    <input v-model="article.userId" type="text" class="form-control" id="userId">   
                </td>
                <td v-else>
                    {{article.userId}}
                </td>              
                <td v-if="updateId!==article.id">
                    <button class="btn btn-sm btn-primary" @click="handleUpdate(article)">Güncelle</button>
                    <button class="btn btn-sm btn-danger" @click="handleDelete(article)">Sil</button>
                </td>
                <td v-else>
                    <button class="btn btn-sm btn-success" @click="handleSave(article)">Kaydet</button>
                    <button class="btn btn-sm btn-warning" @click="updateId=null">İptal</button>
                </td>
            </tr>
        </tbody>
    </table>

    </div>
</template>
<script>
export default {
    name:'article-list',
    data(){
        return {updateId : null};
    },
    props:{
        articles:Array
    },
    methods:{
        handleDelete(article){
            this.$emit("delete:article",article)
        },
        handleUpdate(article){
            this.updateId = article.id
        },
        handleSave(article){
            this.$emit("update:article",article)
            this.updateId = null
        }
    }
}
</script>
<style scoped>
#list{
    margin: 100px;
}
</style>