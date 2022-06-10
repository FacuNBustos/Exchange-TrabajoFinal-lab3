import {  createStore } from "vuex";
import shop from "./modules/shop";
import crypto from "./modules/crypto";
import navbar from "./modules/navbar";
import profile from './modules/profile';

export default createStore({
    modules:{
        shop,
        crypto,
        navbar,
        profile
    },
})