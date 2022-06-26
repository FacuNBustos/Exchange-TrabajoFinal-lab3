import store from "..";

export default {
    namespaced: true,
    state: {
        buyCheck: false,
        sellCheck : false,
        type: null,
        exchange: null,
        price: null,
        cost: null,
        quantity: null,
    },
    mutations: {
        changeBuyCheck (state) {
            state.buyCheck = true;
        },
        changeSellCheck (state) {
            state.sellCheck = true;
        },
        changeBuySell (state) {
            state.buyCheck = false;
            state.sellCheck = false;
        },
        changeCost (state, value) {
            if (buyCheck){
                state.cost = value.totalAsk;
            } 
            else{
                state.cost = value.totalBid;
            };
        },
        changeQuantity (state, value){
            state.cost = null;
            state.quantity = value;
            state.cost = state.quantity * state.price;
        }

    },
    actions: {
        handleChangeBuy ({ state, commit }, value) {
            commit('changeBuyCheck');
            state.type = store.state.shop.type;
            state.cost = null;
            state.exchange = value;
            state.price = store.state.shop.exchanges[value].totalAsk;
        },
        handleChangeSell ({ state, commit }, value) {
            commit('changeSellCheck');
            state.type = store.state.shop.type;
            state.cost = null;
            state.exchange = value;
            state.price = store.state.shop.exchanges[value].totalBid;
        },
        handleCancelTransaction ({ commit }) {
            commit('changeBuySell');
        },
        handleChangeType ({ state }, value) {
            state.type = value
        },
        handleChangeCost ({ commit, state }) {
            getValueCrypto(state.quantity, state.type, state.exchange)
            .then(response => commit('changeCost', response));
        },
        handleChangeQuantity ({ commit }, value) {
            commit('changeQuantity', value);
        },
    }
}