import getCryptoDivisas from "../../services/cryptodivisas.service";

export default {
    namespaced: true,
    state: {
        crytoData: {},
        checked: false,
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
            if (state.checked != true) {
                commit('handleReset');
            getCryptoDivisas()
            .then(function(response){
                if (response != null){
                    state.crytoData = response.data;
                    state.checked = true;
                };
            });
            };
        },
    }
}