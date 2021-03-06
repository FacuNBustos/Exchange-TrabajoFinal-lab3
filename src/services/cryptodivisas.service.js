import axios from "axios";

const getCryptoDivisas = async () => {
    try{
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true');
        return response
    }catch (error){
        return null;
    }
}

export default getCryptoDivisas;