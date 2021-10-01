import { createRouter, createWebHistory } from 'vue-router'
import Edit from ".././pages/Edit.vue"
import Index from ".././pages/Index.vue"
import View from ".././pages/View.vue"
import Setting from "../pages/Setting.vue"
import Personal from "../pages/Personal.vue"
const routes = [
    { path: '/', component: Index },
    { path: '/Edit', component: Edit },
    { path: '/Index', component: Index },
    { path: '/View', component: View },
    { path: '/Setting', component: Setting },
    { path: '/Personal', component: Personal },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router