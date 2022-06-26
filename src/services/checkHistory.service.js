import getExchangeCrypto from "./cryptoExchanges.service";

const checkHistory = async (values) => {
    let history = {};
    try{
        values.map((elem) => {
            if (history[elem.crypto_code]){
                if (elem.action == 'purchase'){
                    history[elem.crypto_code].moneyPurchase += parseFloat(elem.money);
                    history[elem.crypto_code].quantityPurchase += parseFloat(elem.crypto_amount);
                }else {
                    history[elem.crypto_code].moneySale += parseFloat(elem.money);
                    history[elem.crypto_code].quantitySale += parseFloat(elem.crypto_amount);
                }
            }else {
                if (elem.action == 'purchase'){
                    history[elem.crypto_code] = {
                        code: elem.crypto_code,
                        moneyPurchase: parseFloat(elem.money),
                        moneySale: 0,
                        quantityPurchase: parseFloat(elem.crypto_amount),
                        quantitySale: 0,
                        profit: 0,
                        valued: 0
                    };
                }else {
                    history[elem.crypto_code] = {
                        code: elem.crypto_code,
                        moneyPurchase: 0,
                        moneySale: parseFloat(elem.money),
                        quantityPurchase: 0,
                        quantitySale: parseFloat(elem.crypto_amount),
                        profit: 0,
                        valued: 0
                    };
                }
            };
        });
        Object.keys(history).map((elem) => {
            getExchangeCrypto(elem)
            .then(response => response.data)
            .then(function(data) {
                history[elem].valued = data[Object.keys(data)[0]].totalBid * (history[elem].quantityPurchase - history[elem].quantitySale);
                history[elem].profit = ( history[elem].valued ) + history[elem].moneySale - history[elem].moneyPurchase;
            })
        })
        return history;
    }catch (error) {
        return error.message;
    }
}

export default checkHistory;