<template>
        <table class="table">
            <thead>
                <tr>                   
                    <th>İçerik</th>                   
                    <th>Not</th>
                    <th>İsim</th>                  
                </tr>
            </thead>
            <tbody>
                <tr >            
                    <td >
                        {{comments.text}}
                    </td>                                   
                    <td >
                        {{comments.note}}
                    </td>                   
                    <td >
                        {{comments.name}}
                    </td>                                                        
                </tr>
            </tbody>
        </table>
</template>
<script>
export default {
    name:'article-comment-add',
props:{
        comments:Array
    },
}
</script>
<style scoped>

</style>