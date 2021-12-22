<template>    
    <div>
        <CommentAdd @add:comment="addComment"/>
        <CommentList @delete:comment="deletecomment" @update:comment="updatecomment" :comments="comments"/>
    </div>
</template>
<script>
import CommentList from './CommentList.vue'
import CommentAdd from './CommentAdd.vue'

export default {
    name:'comment',
    components:{
        CommentList,
        CommentAdd
    },
    data(){
        return{
            comments:[]
        }
    },
    mounted(){
        this.getComments()
    },
    methods:{
        async getComments(){
            const result = await fetch('https://localhost:44374/api/Comments/getall')
            const data = await result.json()
            this.comments = data;
        },
        async deletecomment(comment){
            await fetch('https://localhost:44374/api/Comments/delete',{
                method:'DELETE',
                body:JSON.stringify(comment),
                headers:{"Content-Type":"application/json"}
            })

            this.comments =this.comments.filter(
                commentToFilter => commentToFilter.id!==comment.id
            )
        },
        async updatecomment(comment){
            const result = await fetch('https://localhost:44374/api/Comments/update',{
                method:'POST',
                body:JSON.stringify(comment),
                headers:{"Content-Type":"application/json"}
            })
            const updatedComment = await result.json()
            this.comments = this.comments.map(comment=>comment.id===updatedComment.id?updatedComment:comment)
        },
        async addComment(comment){
            const result = await fetch('https://localhost:44374/api/Comments/add',{
                method:'POST',
                body:JSON.stringify(comment),
                headers:{"Content-Type":"application/json"}
            })
            const newComment = await result.json()
            this.comments = [...this.comments,newComment]
        }
    }
}
</script>
<style scoped>

</style>