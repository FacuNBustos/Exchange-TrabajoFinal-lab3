
export default {
    namespaced: true,
    state: {
        id: null,
    },
    mutations: {
        changeId (state, value) {
            const longitud = value.trim().length;
            if (longitud == 20) {
                state.id = value.trim().toLowerCase();
            };
        }

    },
    actions: {
        handleChangeId ({ commit }, value) {
            commit('changeId', value);
        }
    }
}