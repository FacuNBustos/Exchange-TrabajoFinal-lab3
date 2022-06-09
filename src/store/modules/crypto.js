import getCryptoDivisas from "../../services/cryptodivisas.service";

export default {
    namespaced: true,
    state: {
        crytoData: {},
    },
    getters: {
    },
    mutations: {
        handleReset (state) {
            state.crytoData = {};
        }
    },
    actions: {
        handleSubmitCrypto ({state, commit}){
            commit('handleReset');
            getCryptoDivisas()
            .then(function(response){
                state.crytoData = response.data;
            });
            return state.crytoData;
        },
    }
}