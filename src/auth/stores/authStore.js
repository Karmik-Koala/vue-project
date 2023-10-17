import { defineStore } from "pinia";


export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            userAuth: ''
        }
    },
    getters: {
        getUserAuth: (state) => state.userAuth
    },
    actions: {
        setUserAuth(userAuth){
            this.userAuth = userAuth
        }
    }
})