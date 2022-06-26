
export default {
    namespaced: true,
    state: {
        load: false
    },
    mutations: {
    },
    actions: {
        handleChangeLoad ({state}){
            if(state.load){
                state.load = false;
            }else {
                state.load = true;
            }
        },
    }
}