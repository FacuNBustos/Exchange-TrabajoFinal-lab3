
import { getApi } from '../../services/connectionApi.service';

export default {
    namespaced: true,
    state: {
        id: null,
        history: null,
        distribution: null,
        check: false,
    },
    mutations: {
        changeId (state, value) {
            const longitud = value.trim().length;
            if (longitud == 20) {
                state.id = value.trim().toLowerCase();
                getApi(state.id)
                .then(response => state.history = response);
            };
        },
        recharge (state) {
            getApi(state.id)
            .then(response => state.history = response);
        }

    },
    actions: {
        handleChangeId ({ commit }, value) {
            commit('changeId', value);
        },
        rechargeId ({commit}) {
            commit('recharge');
        }

    }
}