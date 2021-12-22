<template>
    <div id="addForm">
        <form @submit.prevent="handleAdd">
            <!-- <div class="form-group">
                <label for="id">ID</label>
                <input v-model="category.id" type="text" class="form-control" id="id">
            </div> -->
            <div class="form-group">
                <label for="name">Kategori Adı</label>
                <input v-model="category.name" type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="description"> Açıklama</label>
                <input v-model="category.description" type="text" class="form-control" id="description">
            </div>
            <div class="form-group">
                <label for="note"> Not</label>
                <input v-model="category.note" type="text" class="form-control" id="note">
            </div>
            <hr>
            <button type="submit" @click="refresh" class="btn btn-sm btn-success">Ekle</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"product-add",
    data(){
        return {
            category:{name:'',description:'',note:''}
        }
    },
    methods:{
        handleAdd(){
            this.$emit("add:category",this.category)          
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