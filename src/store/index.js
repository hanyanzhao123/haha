import Vue from "vue";
import Vuex from "vuex"
import admin from "./admin"
Vue.use(Vuex)
const state={
    loading:false,
}

const mutations={
    CHANGE_LOADING(state,bol){
        console.log(state);
        state.loading = bol;
    }
}

var modules= {
    admin
}

export default new Vuex.Store({
    state,
    mutations,
    actions:{},
    modules

})