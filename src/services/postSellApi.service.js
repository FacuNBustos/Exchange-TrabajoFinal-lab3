import store from '../store';
import { postApi } from './connectionApi.service';

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return (
        [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear()
        ].join('-') +
        ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
        ].join(':')
    );
}

const postSellApi = async () => {
    try{
        if (store.state.profile.id && store.state.transaction.cost){
            const data = {
                user_id: store.state.profile.id,
                action: "sale",
                crypto_code: store.state.transaction.type,
                crypto_amount: store.state.transaction.quantity,
                money: `${store.state.transaction.cost.toFixed(2)}`,
                datetime: formatDate(new Date())
            };
            const response = await postApi(data);
            return response.data;
        }else {
            return null;
        }
    }catch (error) {
        return null;
    }
};

export default postSellApi;