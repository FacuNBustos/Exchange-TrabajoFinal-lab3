import {  createStore } from "vuex";
import user from "./modules/user";
import crypto from "./modules/crypto";
import navbar from "./modules/navbar";

export default createStore({
    modules:{
        user,
        crypto,
        navbar
    },
})