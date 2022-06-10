import getExchangeCrypto from "../../services/cryptoExchanges.service";

export default {
    namespaced: true,
    state: {
        type: 'none',
        checked: false,
        exchanges : null,
    },
    mutations: {
        changeType (state, value) {
            state.type = value;
        },
        resetExchanges (state) {
            state.exchanges = null;
        }
    },
    actions: {
        handleChangeType ({ commit }, value) {
            commit('changeType', value);
        },
        handleCheckedExchange ({ state, commit }) {
            if (state.type != 'none'){
                commit('resetExchanges');
                getExchangeCrypto(state.type)
                .then(function (response) {
                    if (response != null) {
                        state.exchanges = response.data;
                        state.checked = true;
                    };
                });
            };
        }
    }
}