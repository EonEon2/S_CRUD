const IndexPage = () => import("../pages/todo/IndexPage.vue")
const TodoListPage = () => import("../pages/todo/TodoListPage.vue") 
const TodoReadPage = () => import("../pages/todo/TodoReadPage.vue")
const TodoAddPage = () => import("../pages/todo/TodoAddPage.vue")
const TodoEditPage = () => import("../pages/todo/TodoEditPage.vue")
import { moveToLogin } from "./moveToLogin"


const todoRoutig = { path: "/todo",
    component: IndexPage,
    children: [
        {path:'list', component:TodoListPage, beforeEnter: moveToLogin},
        {path:'', redirect:'/todo/list?page=1'},
        {path:'read/:mno', component:TodoReadPage},
        {path:'add', component:TodoAddPage},
        {path:'edit/:mno', component:TodoEditPage}
        
    ]
}


export default todoRoutig