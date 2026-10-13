import { createRouter, createWebHistory } from 'vue-router'

import CondicionesView from '../views/CondicionesView.vue'
import ListasConClaveView from '../views/ListasConClaveView.vue'
import ListasView from '../views/ListasView.vue'
import VisibilidadView from '../views/VisibilidadView.vue'

const routes = [
    {
        path: "/condiciones",
        component: CondicionesView
    },
    {
        path: "/listas-con-clave",
        component: ListasConClaveView
    },
    {
        path: "/listas",
        component: ListasView
    },
    {
        path: "/visibilidad",
        component: VisibilidadView
    }
]

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    }
)

export default router
