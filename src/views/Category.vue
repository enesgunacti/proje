<template>
    <div id="list">
        <CategoryAdd @add:category="addProduct"/>
        
        <p v-if="categories.length==0">Tanımlı Kategori Yok</p>
        <table v-else class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Kategori Adı</th>
                    <th>Açıklama</th>
                    <th>Not</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories" :key="category.id">
                    <td v-if="updateId===category.id">
                        <input v-model="category.id" type="text" class="form-control" id="id">
                    </td>
                    <td v-else>
                        {{category.id}}
                    </td>

                     <td v-if="updateId===category.id">
                        <input v-model="category.name" type="text" class="form-control" id="id">
                    </td>
                    <td v-else>
                        {{category.name}}
                    </td>

                     <td v-if="updateId===category.id">
                        <input v-model="category.description" type="text" class="form-control" id="id">
                    </td>
                    <td v-else>
                        {{category.description}}
                    </td>

                     <td v-if="updateId===category.id">
                        <input v-model="category.note" type="text" class="form-control" id="id">
                    </td>
                    <td v-else>
                        {{category.note}}
                    </td>

                    <td v-if="updateId!==category.id">
                        <button class="btn btn-sm btn-primary" @click="handleUpdate(category)">Güncelle</button>
                        <button class="btn btn-sm btn-danger" @click="deleteProduct(category)">Sil</button>
                    </td>
                    <td v-else>
                        <button class="btn btn-sm btn-success" @click="updateProduct(category);updateId=null">Kaydet</button>
                        <button class="btn btn-sm btn-warning" @click="updateId=null">İptal</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CategoryAdd from './CategoryAdd.vue'
export default {
    name:'category',
    components:{
        CategoryAdd
    },
   data(){
    return{
        updateId:null,
        categories:[

        ]
    }
  },
  mounted(){
      this.getCategories()
  },
  methods:{
    handleUpdate(category){
        this.updateId=category.id
    },
   async updateProduct(category){
       const result = await fetch('https://localhost:44374/api/Categories/update',{
            method:'POST',                     
            body:JSON.stringify(category),
            headers:{"Content-Type":"application/json"}           
        })
        const updatedCategory = await result.json()
        this.categories = this.categories.map(category => category.id===updatedCategory.id?updatedCategory:category)      
   },
    async deleteProduct(category){
        await fetch('https://localhost:44374/api/Categories/delete',{
            method:'DELETE',
            body:JSON.stringify(category),
            headers:{"Content-Type":"application/json"}         
        })
        this.categories = this.categories.filter(
            productToFilter=>productToFilter.id!==category.id
        )
    },   
       
   async getCategories(){
        const result = await fetch('https://localhost:44374/api/Categories/getall')
        const data = await result.json()
        this.categories = data;
    },
    async addProduct(category){
        const result = await fetch('https://localhost:44374/api/Categories/add',{
            method:'POST',                     
            body:JSON.stringify(category),
            headers:{"Content-Type":"application/json"}
            
        })
        const newProduct = await result.json()
        this.categories = [...this.categories,newProduct]
    },

  }
}
</script>
<style scoped>
#list{
    margin: 100px;
}
</style>