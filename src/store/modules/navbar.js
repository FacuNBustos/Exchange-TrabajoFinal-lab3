
export default {
    namespaced: true,
    state: {
        home: true,
        shop: false,
        profile: false,
        admin: false,
    },
    mutations: {
        handleActivesReset (state){
            state.home = false;
            state.shop = false;
            state.profile = false;
            state.admin = false;
        }
    },
    actions: {
        handleChangeHome ({ commit, state }) {
            commit('handleActivesReset');
            state.home = true;
        },
        handleChangeShop ({state, commit}) {
            commit('handleActivesReset');
            state.shop = true;
        },
        handleChangeProfile ({state, commit}) {
            commit('handleActivesReset');
            state.profile = true;
        },
        handleChangeAdmin ({ state, commit }){
            commit('handleActivesReset');
            state.admin = true;
        }
    }
}