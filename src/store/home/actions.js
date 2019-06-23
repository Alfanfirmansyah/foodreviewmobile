import axios from 'axios'
export function getData(context) {
    return axios.get('http://192.168.3.10:3000/restos')
}

export function getNotify(context,time) {
    return axios.get('http://192.168.3.10:3000/reviews/notify?date='+time)
}



