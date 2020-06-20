import Axios from "axios"

function findAll(){
    return  Axios.get("http://marquisedesanges.melissadm.net/api/comments/")
    .then(response => response.data['hydra:member'])
}
function find(id){
    return Axios.get(`http://marquisedesanges.melissadm.net/api/comments/${id}`)
                .then(response=>response.data)
}


export default {
    findAll:findAll,
    find: find,
} 