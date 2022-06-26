
export default {
    namespaced: true,
    state: {
        load: false,
        alert: false,
        alertMessage: null,
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
        handleChangeAlertMessage ({state}, value){
            state.alertMessage = value;
        },
        handleChangeAlert ({state}) {
            if (state.alert) {
                state.alert = false;
            }else {
                state.alert = true;
            }
        }
    }
}