<template> 
<div id="app">
  
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link  class="nav-link" to="/article">
       Makaleler
       </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/category">
       Kategoriler
       </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/comment">
       Yorumlar
       </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/blog">
       Blog
       </router-link>
      </li>
      
    </ul>  
  </div>
</nav>
  <router-view/>
  </div>
</template>
<script>

export default {
  name:'app',
  components:{

  },
  
}
</script>

<style scoped >
a.active{
  background: black;
  
}
.title {
  font-family: 'Lobster';
}
.block{
  max-width: 600px;
  margin: 0 auto;
}

</style>
