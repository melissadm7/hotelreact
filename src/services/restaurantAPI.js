import Axios from "axios"

function findAll(){
    return  Axios.get("http://marquisedesanges.melissadm.net/api/restaurants/")
    .then(response => response.data['hydra:member'])
}


export default {
    findAll: findAll
} 