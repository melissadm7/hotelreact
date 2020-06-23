import Axios from "axios"

function findAll(){
    return  Axios.get("http://marquisedesanges.melissadm.net/api/bookings/")
    .then(response => response.data['hydra:member'])
}
function find(id){
    return Axios.get(`http://marquisedesanges.melissadm.net/api/users/${id}/bookings`)
                .then(response=>response.data['hydra:member'])
}

function findOne(id){
    return Axios.get(`http://marquisedesanges.melissadm.net/api/bookings/${id}`)
                .then(response=>response.data)
}


export default {
    findAll:findAll,
    find: find,
    findOne: findOne
} 