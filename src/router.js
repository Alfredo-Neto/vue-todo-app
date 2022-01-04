import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '@/components/Todo-App.vue'
import About from '@/components/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: Todo
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
    ]
})