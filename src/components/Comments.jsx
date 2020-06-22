import React, {useState} from 'react';
import moment from 'moment'
import jwtDecode from "jwt-decode"
import { toast } from 'react-toastify';
import Axios from 'axios';



const Comments = (props) => {

    const token = window.localStorage.getItem("authToken")
    const jwtData = jwtDecode(token)
    var myid= jwtData.id

    const [postComment, setPostComment] = useState({
        content:'',
        author:`/api/users/${myid}`,
        rating:1,
        created:'',
        room: `/api/rooms/${props.id}`
    })

    const [errors, setErrors] = useState({
        content:'',
        author:'',
        rating:'',
        created:'',
        room:''
    })
    

    const handleChange = (event) => {
        const {name, value} = event.currentTarget
        setPostComment({...postComment, [name]: value})    
    }

    const handleSubmit = async (event) => {
       
        event.preventDefault()
        const newComment = {
            content:postComment.content,
            author:`/api/users/${myid}`,
            rating:parseFloat(postComment.rating),
            created:`${moment().format()}`,
            room: `/api/rooms/${props.id}`    
        }

       try{
           await Axios.post('http://marquisedesanges.melissadm.net/api/comments', newComment)
           toast.success('Votre commentaire a bien été envoyé')
           
       }catch({response}){
           const apiErrors = {}
          const {violations} = response.data
          if(violations){
            violations.forEach(({propertyPath, message}) => {
                apiErrors[propertyPath] = message
            })
            setErrors(apiErrors)
          }
       //   toast.error('Des erreurs dans votre commentaire')
       console.log(response)
    }

    
    }


    return ( 
        <>
            <h1>Formulaire</h1>
            <form onSubmit={handleSubmit}>
            <select name="rating" id="rating" value={postComment.rating} onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
            </select>
            <textarea id="content" name="content" value={postComment.content} onChange={handleChange}/>
            <button type="submit" className="btn btn-success">Envoyer</button>
            </form>
        </>
     );
}
    
export default Comments;