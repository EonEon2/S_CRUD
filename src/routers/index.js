import { createRouter, createWebHistory } from 'vue-router'
import todoRoutig from './todo'

const MaingPage = () => import('../pages/MainPage.vue')
const AboutPage = () => import('../pages/AboutPage.vue')
const LoginPage = () => import('../pages/LoginPage.vue')


const routeConfig = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', component: MaingPage},
        {path:'/about', component: AboutPage},
        {path:'/signin', component: LoginPage},
        todoRoutig
    ]
})

export default routeConfig
