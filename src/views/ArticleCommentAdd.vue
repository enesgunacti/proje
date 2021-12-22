<template>
<div class="container">
    <div id="">
        <form @submit.prevent="handleAdd">
            
            <div class="form-group">
                <label for="text"> İçerik</label>
                <input  v-model="comment.text" type="text" class="form-control" id="text">
            </div>
            <div class="form-group">
                <label for="articleId"> Makale Numarası</label>
                <input  v-model="comment.articleId" type="text" class="form-control" id="articleId">
            </div>
            <div class="form-group">
                <label for="note"> Not</label>
                <input  v-model="comment.note" type="text" class="form-control" id="note">
            </div>
            <div class="form-group">
                <label for="name"> İsim</label>
                <input  v-model="comment.name" type="text" class="form-control" id="name">
            </div>
            <hr>
            <button type="submit" @click="refresh" class="btn btn-sm btn-success">Ekle</button>
        </form>
    </div>
    </div>
</template>
<script>
export default {
    name:'article-comment-add',
    data(){
        return{
            comment:{text:'',articleId:'',note:'',name:''}
        }
    },
    methods:{
        handleAdd(){
            this.$emit("add:comment",this.comment)
        },
        refresh(){
            window.location.reload();
        }
    }
}
</script>
<style scoped>
#addForm{
    margin: 100px;
}
</style>