import Axios from "axios"

function findAll(){
    return  Axios.get("http://marquisedesanges.melissadm.net/api/image_rooms/")
    .then(response => response.data['hydra:member'])
}


export default {
    findAll:findAll,
} 