import { createRouter, createWebHistory } from 'vue-router'
import Article from '../views/Article'
import Category from '../views/Category'
import Comment from '../views/Comment'
import Blog from '../views/Blog'
import ArticleDetail from '../views/ArticleDetail'


const routes = [
  {
    path:"/article",
    component:Article
  },
  {
    path:"/category",
    component:Category
  },
  
  {
    path:"/comment",
    component:Comment
  },
  {
    path:"/blog",
    component:Blog
  },
  {
    path:"/article/:slug/",
    component:ArticleDetail
  },
  
];

const router = createRouter({
  routes,
  history : createWebHistory(),
  linkActiveClass:'active'
});

export default router
