import Axios from "axios"

function findAll(){
    return  Axios.get("http://marquisedesanges.melissadm.net/api/users/")
    .then(response => response.data['hydra:member'])
}
function find(id){
    return Axios.get(`http://marquisedesanges.melissadm.net/api/users/${id}`)
                .then(response=>response.data)
}
function updateUser(id, user){
    return Axios.put(`http://marquisedesanges.melissadm.net/api/users/${id}`, user)
}



export default {
    findAll: findAll,
    find: find,
    update:updateUser

}