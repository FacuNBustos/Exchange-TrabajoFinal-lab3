
const checkID = (id) => {
    try{
        let idFresh = id.trim();
        idFresh = idFresh.split('').filter(function(v) { return !((v.charCodeAt(0) >= 48 && v.charCodeAt(0) <= 57) || (v.charCodeAt(0) >= 65 && v.charCodeAt(0) <= 90))})
        if (idFresh.length){
            return false;
        }else{
            return true;
        }
    }catch (error) {
        return false;
    }
}

export default checkID;