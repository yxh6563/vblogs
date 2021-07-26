import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{  //用来存储数据
        commitsum:{},
        isLogin: false,   //用来显示是否登录
        currentuser: null   //用来显示用户信息是是否显示
    },
    getters:{  //获得数据状态
        getIsLogin: state => state.isLogin,
        getCurrentuser: state => state.currentuser
    },
    mutations:{  //用来更改数据状态
        setcommit(state,data){
            state.commitsum = data
        },
        remove(state,data){
            state.commitsum.forEach((item,index) =>{
                if(item == data){
                    state.commitsum.splice(index,1)
                }
            })
        },
        //更改用户的状态信息  如果用户信息没有则保存，如果有则进行清空
        userStatus(state,user){
            if(user){
                state.currentuser = user;
                state.isLogin = true
            }
            else{
                state.currentuser = false
                state.isLogin = false
            }
        }
    },
    actions:{ //应用mutations
        setUser({commit},user){
            commit("userStatus",user)
        }
    }
})