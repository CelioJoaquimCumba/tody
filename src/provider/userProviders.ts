import { createStore } from "vuex"


export const store = createStore({
    state(): { user: {id:string,email:string} | null } {
        return {
            user: null
        }
    },
    mutations: {
        setUser (state, user) {
            state.user = user
        }
    }
})