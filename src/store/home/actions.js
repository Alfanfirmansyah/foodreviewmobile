import axios from 'axios'
export function getData(context) {

    return axios.get('http://192.168.3.10:3000/restos')
}

export function detailPage(context,id) {

    return axios.get('http://192.168.3.10:3000/restos/'+id)
}