<template>
    <div id="list">
        <p v-if="comments.length==0">Herhangi Bir Yorum Yok</p>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>İçerik</th>
                    <th>Makale Numarası</th>
                    <th>Not</th>
                    <th>İsim</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="comment in comments" :key ="comment.id">
                    <td v-if="updateId===comment.id">
                        <input v-model="comment.id" type="text" class="form-control" id="id">
                    </td>
                    <td v-else>
                        {{comment.id}}
                    </td>
                    <td v-if="updateId===comment.id">
                        <input v-model="comment.text" type="text" class="form-control" id="text">
                    </td>
                    <td v-else>
                        {{comment.text}}
                    </td>
                    <td v-if="updateId===comment.id">
                        <input v-model="comment.articleId" type="text" class="form-control" id="articleId">
                    </td>
                    <td v-else>
                        {{comment.articleId}}
                    </td>
                    <td v-if="updateId===comment.id">
                        <input v-model="comment.note" type="text" class="form-control" id="note">
                    </td>
                    <td v-else>
                        {{comment.note}}
                    </td>
                    <td v-if="updateId===comment.id">
                        <input v-model="comment.name" type="text" class="form-control" id="name">
                    </td>
                    <td v-else>
                        {{comment.name}}
                    </td>                                    
                    <td v-if="updateId!==comment.id">
                        <button class="btn btn-sm btn-primary" @click="handleUpdate(comment)">Güncelle</button>
                        <button class="btn btn-sm btn-danger" @click="handleDelete(comment)">Sil</button>
                    </td>
                    <td v-else>
                        <button class="btn btn-sm btn-success" @click="handleSave(comment)">Kaydet</button>
                        <button class="btn btn-sm btn-warning" @click="updateId=null">İptal</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    
    name:'comment-list',
    data(){
        return{updateId:null};
    },
    props:{
        comments:Array
    },
    methods:{
        handleDelete(comment){
            this.$emit("delete:comment",comment)
        },
        handleUpdate(comment){
            this.updateId = comment.id
        },
        handleSave(comment){
            this.$emit("update:comment",comment)
            this.updateId=null
        }
    },
    
}
</script>
<style scoped>
#list{
    margin: 100px;
}
</style>