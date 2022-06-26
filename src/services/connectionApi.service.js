import axios from "axios";
import store from '../store';
import checkHistory from "./checkHistory.service";

const getApi = async (id) => {
    const response = await axios.get(`https://laboratorio3-f36a.restdb.io/rest/transactions?q={"user_id":"${id}"}`, {
        baseURL: 'https://laboratorio3-f36a.restdb.io/rest',
        headers: {'x-apikey': '60eb09146661365596af552f'}
    });
    
    checkHistory(response.data)
    .then(function(response) {
        store.state.profile.distribution = response;
        store.state.profile.check = true;
    });
    
    return response.data;
}

const getApiAdmin = async (id) => {
    const response = await axios.get(`https://laboratorio3-f36a.restdb.io/rest/transactions?q={"user_id":"${id}"}`, {
        baseURL: 'https://laboratorio3-f36a.restdb.io/rest',
        headers: {'x-apikey': '60eb09146661365596af552f'}
    });
    return response.data;
}

const postApi = async (values) => {
    const response = await axios.post('https://laboratorio3-f36a.restdb.io/rest/transactions', {
        user_id: values.user_id,
        action: values.action,
        crypto_code: values.crypto_code,
        crypto_amount: values.crypto_amount,
        money: values.money,
        datetime: values.datetime
    }, {
        baseURL: 'https://laboratorio3-f36a.restdb.io/rest',
        headers: {'x-apikey': '60eb09146661365596af552f'},
    });
    return response;
} 

const deletedApi = async (id) => {
    try{
        const response = await axios.delete(`https://laboratorio3-f36a.restdb.io/rest/transactions/${id}`, {
            headers: {'x-apikey': '60eb09146661365596af552f'},
        })
        return response;
    }catch (error){
        return false;
    }
}

const patchApi = async (money, amount) => {
    try{
        const response = await axios.patch(`https://laboratorio3-f36a.restdb.io/rest/transactions/${store.state.admin.editableInfo._id}`,{
            money: money,
            crypto_amount : amount,
        },{
            headers: {'x-apikey': '60eb09146661365596af552f'},
        })
        return response;
    }catch (error) {
        return false;
    }
}

export { getApi, getApiAdmin, postApi, deletedApi, patchApi };