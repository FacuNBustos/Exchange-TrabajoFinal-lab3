import {  createStore } from "vuex";
import shop from "./modules/shop";
import crypto from "./modules/crypto";
import navbar from "./modules/navbar";
import profile from './modules/profile';
import transaction from './modules/transaction';
import admin from './modules/admin';
import helper from "./modules/helper";

export default createStore({
    modules:{
        shop,
        crypto,
        navbar,
        profile,
        transaction,
        admin,
        helper
    },
})