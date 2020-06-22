import Axios from "axios"

function findAll(){
    return  Axios.get("http://marquisedesanges.melissadm.net/api/comments/")
    .then(response => response.data['hydra:member'])
}
function find(id){
    return Axios.get(`http://marquisedesanges.melissadm.net/api/comments/${id}`)
                .then(response=>response.data)
}
function createComment(comment){
    return Axios.post("http://marquisedesanges.melissadm.net/api/comments/", comment)
}
function updateComment(id,comment){
    return Axios.post(`http://marquisedesanges.melissadm.net/api/comments/${id}`, comment)
}


export default {
    findAll:findAll,
    find: find,
} 