import axios from 'axios'
export function getData(context,id) {

    return axios.get('http://192.168.3.10:3000/restos/'+id)
}
export function getFood(context,id) {

    return axios.get('http://192.168.3.10:3000/foods/?restos_id='+ id)
   
}
export function getDetailFood(context,id) {

    return axios.get('http://192.168.3.10:3000/foods/'+ id)
   
}

export function getDetailFoodReview(context,id) {

    return axios.get('http://192.168.3.10:3000/reviews/?foods_id='+ id)
   
}







