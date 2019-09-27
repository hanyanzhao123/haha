import axios from "axios"

const state = {
    adminName:localStorage.adminName,
    token:localStorage.token,
    adminLog:[]
}
const mutations = {
    CHANGE_ADMIN_LOG(state,adminLog){
        state.adminLog = adminLog
    },
    CHANGE_ADMINNAME_TOKEN(state,{adminName,token}){
        state.afminName = localStorage.adminName = adminName;
        state.token = localStorage.token = token;
    },
    OUT_LOGIN(state){
        localStorage.clear();
        state.adminName = state.toke =null;
    }
}

const actions = {
    adminLogin(content,{adminInfo}){
        return new Promise(async (resolve,reject)=>{
            const data = await axios.post("/adminLogin",adminInfo);
            if(data.ok === 1){
                content.commit("CHANGE_ADMINNAME_TOKEN",data);
                resolve(data);
            }else{
                reject(data);
            }
        })
       /* axios.post("/adminLogin",adminInfo).then((data)=>{
           content.commit("CHANGE_ADMINNAME_TOKEN",data)
        })*/
    },
    getAdminLog({commit},adminLog){

    }
}


export default {
    state,
    mutations,
    actions,
}