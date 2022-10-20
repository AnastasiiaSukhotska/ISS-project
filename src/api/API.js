import axios from 'axios';
const instance = axios.create({
   
   baseURL: 'http://api.open-notify.org/',
});

export const  ISS_API = {
    getCrewInformation() {
        return instance.get('astros.json')
        .then(res => {
            return res.data
        })
    },

    getLocationInformation() {
        return instance.get('iss-now.json')
        .then(res => {
            return res.data
        })
    }
}



