import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
Vue.use(Router)

const router = new Router({
    made:"history",
    base:process.env.BASE_URL,
    routes:[
        {
            path:"/adminLog",
            name:"adminLog",
            component:()=>import("@/views/admin/adminLog"),
            meta:{
                isAuthorization:true
            }

        }
    ]
})
router.beforeEach((to,form,next)=>{
    if(to.meta.isAuthorization){
        if(localStorage.token){
            next();
        }else{
            store.commit("OUT_LOGIN")
        }
    }else{
        next();
    }
})
export default router;