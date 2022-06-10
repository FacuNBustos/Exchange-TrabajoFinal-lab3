import axios from "axios";

const getExchangeCrypto = async (type) => {
    try{
        const response = await axios.get(`https://criptoya.com/api/${type}/ars/1`);
        return response;
    }catch (error){
        return null;
    }
}

export default getExchangeCrypto;