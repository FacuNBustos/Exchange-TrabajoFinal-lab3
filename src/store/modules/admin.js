import { getApiAdmin } from "../../services/connectionApi.service";

export default {
    namespaced: true,
    state: {
        check: false,
        search: null,
        editCheck: false,
        editableInfo: null
    },
    mutations: {
    },
    actions: {
        handleChangeCheck ({state}){
            if(state.check){
                state.check = false;
            }else {
                state.check = true;
            }
        },
        handleSearchId ({state}, value){
            getApiAdmin(value)
            .then(response => state.search = response);
        },
        handleChangeEdit ({state}){
            if(state.editCheck){
                state.editCheck = false;
            }else {
                state.editCheck = true;
            }
        },
        handleEditableInfo ({state}, value) {
            state.editableInfo = value;
        }

    }
}