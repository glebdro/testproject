export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token){
        state.token = token
    },
    clearToken(state){
        state.token = null
    }
}

export const getters = {
    hasToken: s => !!s.token //обращаемся к полю state и приводим его к булевому значению
}

export const actions = {
    async login({commit}) {
        commit('setToken', 'trueToken')
    },
    async logout({commit}) {
        commit('clearToken')
    },
}