import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import "./style.css"
import * as VueRouter from 'vue-router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Welcome from './components/Welcome.vue'
import Registration from './components/Registration.vue'
import Info from './components/Info.vue'


const routes = [
    { path: '/', component: Welcome },
    { path: '/registration', component: Registration },
    { path: '/info', component: Info },
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(), //createWebHashHistory
    routes,
})


const app = createApp(App)

app.use(ElementPlus)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')