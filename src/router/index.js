import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from '../store/user'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import("../views/Calendar.vue")
        },{
            path: "/login",
            component: () => import("../views/Login.vue")
        },{
            path: "/register",
            component: () => import("../views/Register.vue")
        },{
            name: "panel",
            path: "/panel",
            component: () => import("../views/Panel.vue")
        }
    ]
})



router.beforeEach(async (to, from) => {
    const currentUsr = await useUserStore().user
    if ( !currentUsr && to.name === 'panel' ) {
      return { name: 'home' }
    }
  })

export default router;