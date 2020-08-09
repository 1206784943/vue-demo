import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import DomainInformation from '../components/DomainInformation'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/aaaa',
            name: 'DomainInformation',
            component: DomainInformation
        }
    ]
})

export default router

